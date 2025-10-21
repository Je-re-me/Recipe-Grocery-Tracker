import dotenv from 'dotenv';
import { GeminiClient } from '@gemini-ai/gemini-client';
import { GoogleGenerativeAI } from '@google/generative-ai';

dotenv.config();

const genAI = new GoogleGenerativeAI(process.env.API_KEY);

async function run() {
    const model = genAI.getGenerativeModel('gemini-pro');

    const prompt = "what does meat taste like?";

    const result = await model.generateText(prompt);
    const response = await result.response;
    const text = response.text();
    console.log(text)
}