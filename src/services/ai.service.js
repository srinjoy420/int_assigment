import { GoogleGenerativeAI } from "@google/generative-ai";
import dotenv from "dotenv";

dotenv.config();

const genAI = new GoogleGenerativeAI(process.env.GEMINI_KEY);

const VALID_CATEGORIES = {
  complaint: 'Complaint',
  complaints: 'Complaint',
  query: 'Query',
  question: 'Query',
  queries: 'Query',
  feedback: 'Feedback',
  suggestion: 'Feedback',
  other: 'Other'
};

const CLASSIFICATION_PROMPT = (text) => `You are a text classifier. Classify the following text into exactly one of these categories:
- Complaint: Negative feedback, dissatisfaction, problems, issues
- Query: Questions, requests for information
- Feedback: Suggestions, opinions, constructive comments
- Other: Anything that doesn't fit the above

Text: "${text}"

Respond with ONLY ONE WORD - the category name. Examples:
- "I hate this" → Complaint
- "What time do you open?" → Query
- "You should add dark mode" → Feedback
- "Hello" → Other

Your response (one word only):`;

const normalizeCategory = (rawCategory) => {
  const cleaned = rawCategory
    .replace(/[.,!?;:\n\r]/g, '')
    .trim()
    .split(' ')[0]
    .toLowerCase();
  
  return VALID_CATEGORIES[cleaned] || 'Other';
};

export const classifyText = async (text) => {
  try {
    const model = genAI.getGenerativeModel({
      model: "gemini-2.5-flash",
      generationConfig: {
        temperature: 0.1,
        maxOutputTokens: 50,
      }
    });

    const prompt = CLASSIFICATION_PROMPT(text);
    const result = await model.generateContent(prompt);
    const response = await result.response;
    const rawCategory = response.text().trim();
    
    if (process.env.NODE_ENV === 'development') {
      console.log('AI Raw Response:', rawCategory);
    }
    
    const category = normalizeCategory(rawCategory);
    
    return {
      text,
      category,
      confidence: 0.95,
      ...(process.env.NODE_ENV === 'development' && { rawResponse: rawCategory })
    };

  } catch (error) {
    console.error('Text classification error:', error.message);
    
    return {
      text,
      category: 'Other',
      confidence: 0.5,
      error: 'Classification failed'
    };
  }
};