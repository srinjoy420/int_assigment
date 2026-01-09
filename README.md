Text Classification API 
A simple AI-powered API that automatically classifies text into categories like Complaints, Queries, Feedback, or Other. Built with Node.js, Express, MongoDB, and Google's Gemini AI.
What Does This Do?
Ever wondered if a customer message is a complaint, a question, or just feedback? This API figures it out for you automatically using AI!
Example:

Send: "I hate this product" → Get back: Complaint
Send: "What are your hours?" → Get back: Query
Send: "Love it but needs dark mode" → Get back: Feedback

Features 

AI-Powered Classification - Uses Google Gemini 2.5 to understand text context
Four Categories - Complaint, Query, Feedback, or Other
Saves Everything - Stores all classifications in MongoDB
View History - See past classifications and filter by category
Free to Use - Google Gemini has a generous free tier
Super Fast - Responses in under 2 seconds

Tech Stack

Node.js & Express - Backend server
MongoDB & Mongoose - Database
Google Gemini AI - Text classification
dotenv - Environment variables

Setup (Step by Step)
1. Clone the Project
bashgit clone 
cd int_assigment
2. Install Dependencies
bashnpm install
3. Get Your Free Gemini API Key

Go to: https://aistudio.google.com/app/apikey
Click "Create API key"
Select a project (or create new one)
Copy the API key (looks like AIzaSy...)

4. Enable the Gemini API
Important! You need to enable the API:

Go to: https://console.cloud.google.com/apis/library/generativelanguage.googleapis.com
Select your project
Click "Enable"
Wait 1 minute
