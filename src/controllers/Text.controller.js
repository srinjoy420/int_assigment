import {classifyText} from "../services/ai.service.js"
import TextModel from "../model/text.model.js"

export const textclassify=async (req,res)=>{
    try {
        const {text}=req.body;
        if(!text || text.trim().length===0){
            return res.status(400).json({
                success:false,
                message:"text is required "
            })
        }
        if(text.length>1000){
             return res.status(400).json({ 
                success: false,
                error: 'Text is too long. Maximum 1000 characters allowed.' 
            });
        }
        const result = await classifyText(text);
        await TextModel.create({
            text: result.text,  // or just 'text'
            category: result.category,  // ✅ Fixed
            confidence: result.confidence
        })
        res.status(200).json({
            success:true,
            data:result
        })
    } catch (error) {
        console.log("error to classify the text",error);
        res.status(500).json({
            success:false,
            error:error.message
        })
        
        
    }
} 
