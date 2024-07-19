import express from "express";
import cors from "cors";
import * as marked from "marked";
import { GoogleGenerativeAI } from "@google/generative-ai";
import { config } from "dotenv";
import { Prompt, PromptResponse } from "./types";
config();

const app = express();

//middleware
app.use(express.json())
app.use(cors())
app.use(express.urlencoded({extended:false}))

// let apiKey:any = process.env.API_KEY;
const genAI = new GoogleGenerativeAI("AIzaSyAiKqSjZ_c0IPo1EZm-Fx69uOGctnIP-EI");

app.post("/prompt", async (req, res) => {
  try {
    let {prompt} : Prompt = req.body;
    // For text-only input, use the gemini-pro model
    const model = genAI.getGenerativeModel({ model: "gemini-pro" });
    const result = await model.generateContent(prompt);
    const response = result.response;
    let promptResponse:PromptResponse = {
      prompt,
      text: marked.parse(response.text()),
    };
    res.status(200).send(promptResponse);
  } catch (error:any) {
    res.status(500).send({ error: error.message });
    console.log(error.message);
  }
});

app.listen(3001, () => {
  console.log("Server running on port 3001!");
});
