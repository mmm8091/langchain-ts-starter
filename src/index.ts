import * as dotenv from "dotenv";
import { OpenAI } from "langchain";

dotenv.config();

const model = new OpenAI({
  temperature: 0.9,
  openAIApiKey: process.env.OPENAI_API_KEY,
});

const res = await model.call(
  "What would be a good company name a company that makes colorful socks?"
);

console.log(res);
