import dotenv from "dotenv";
import { GoogleGenerativeAI } from "@google/generative-ai";

dotenv.config();
const apiKey = process.env.API_KEY;

async function run(fuckingUserInput) {
  const genai=new GoogleGenerativeAI(process.env.API_KEY)
  const model=genai.getGenerativeModel({model:"gemini-2.5-flash"})
  
  const prompt = "what does meat taste like?";
  const result = await model.generateContent(prompt);
  const response = await result.response;
  const text = response.text();
  console.log(text);
}

run();
