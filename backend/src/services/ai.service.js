import "dotenv/config";
import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({
  apiKey: process.env.GOOGLE_GEMINI_KEY,
});

async function generateContent(code) {

  console.log("1. Sending request to Gemini...");

  const response = await ai.models.generateContent({
    model: "gemini-3.5-flash",

    contents: code,

    config: {
      systemInstruction: `You are an expert code reviewer.

Review the given code and provide:
1. Bugs or errors
2. Code quality issues
3. Security issues if any
4. Performance improvements
5. A corrected version of the code

Keep the explanation clear and concise.`,

      thinkingConfig: {
        thinkingLevel: "low"
      },

      maxOutputTokens: 1000,

      httpOptions: {
        timeout: 30000
      }
    }
  });

  console.log("2. Gemini response received");

  return response.text;
}

export default generateContent;


