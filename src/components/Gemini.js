import { GoogleGenerativeAI } from "@google/generative-ai";
import React, { useState, useEffect} from "react";
import ReactMarkdown from "react-markdown";
import initialPrompt from "./initialPrompt.txt";

const apiKey = process.env.REACT_APP_API_KEY;

function Gemini() {
  const [userInput, setUserInput] = useState("");
  const [response, setResponse] = useState("");

  const handleChange = (e) => {
    setUserInput(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const genai = new GoogleGenerativeAI(apiKey);
    const model = genai.getGenerativeModel({ model: "gemini-2.5-flash" });

    const result = await model.generateContent(initialPrompt + userInput);
    const res = await result.response;
    const text = await res.text();
    setResponse(text);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={userInput}
          onChange={handleChange}
          placeholder="Ask me to generate a recipe..."
        />
        <button type="submit">Submit</button>
      </form>
      {response && (
        <div>
          <h3>Response:</h3>
          <ReactMarkdown>{response}</ReactMarkdown>
        </div>
      )}
    </div>
  );

}

export default Gemini;
