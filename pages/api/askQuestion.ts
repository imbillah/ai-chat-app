import type { NextApiRequest, NextApiResponse } from "next";
import query from "../../utils/queryApi";
import admin from "firebase-admin";
import { adminDb } from "../../firebase/firebaseAdmin";

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

  const message: Message = {
    text: response || "Sorry! I am unable to find your answer",
    createdAt: admin.firestore.Timestamp.now(),
    user: {
      _id: "ChatGPT",
      name: "ChatGPT",
      avatar: "https://i.postimg.cc/rFbxKQzM/chat-GPT-icon.png",
    },
  };
  await adminDb
    .collection("users")
    .doc(session?.user?.email)
    .collection("chats")
    .doc(chatId)
    .collection("messages")
    .add(message);
  res.status(200).json({ answer: message.text });
}
