import type { NextApiRequest, NextApiResponse } from "next";
import query from "../../utils/queryApi";

type Data = {
  answer: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const { prompt, chatId, model, session } = req.body;
  if (!prompt) {
    res.status(400).json({ answer: "Please provide a prompt or message" });
  }
  if (!chatId) {
    res.status(400).json({ answer: "Please provide a valid Chat ID" });
  }
  const response = await query(prompt, chatId, model);
  res.status(200).json({ answer: "" });
}
