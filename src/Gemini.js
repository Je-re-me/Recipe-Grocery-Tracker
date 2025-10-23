import { GoogleGenerativeAI } from "@google/generative-ai";
import React, { useState, useEffect} from "react";

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
    const result = await model.generateContent(userInput);
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
          placeholder="Ask me anything..."
        />
        <button type="submit">Submit</button>
      </form>
      {response && (
        <div>
          <h3>Response:</h3>
          <p>{response}</p>
        </div>
      )}
    </div>
  );

}

export default Gemini;
