"use client";
import { PaperAirplaneIcon } from "@heroicons/react/24/outline";
import axios from "axios";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { useSession } from "next-auth/react";
import React, { FormEvent, useState } from "react";
import { toast } from "react-hot-toast";
import { db } from "../../firebase/firebase";
import Avatar from "../../public/assets/userAvatar.png";
type Props = {
  chatId: string;
};
const ChatInput = ({ chatId }: Props) => {
  const [userPrompt, setUserPrompt] = useState("");
  const { data: session } = useSession();

  const model = "text-davinci-003";
  const submitHandler = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!userPrompt || "") return;
    const userInput = userPrompt.trim();
    setUserPrompt("");
    const message: Message = {
      text: userInput,
      createdAt: serverTimestamp(),
      user: {
        _id: session?.user?.email!,
        name: session?.user?.name!,
        avatar: session?.user?.image! || Avatar,
      },
    };
    await addDoc(
      collection(
        db,
        "users",
        session?.user?.email!,
        "chats",
        chatId,
        "messages"
      ),
      message
    );
    // toast notification
    const notification = toast.loading("Hold on! I am thinking");
    await axios
      .post("/api/askQuestion", {
        prompt: userInput,
        chatId,
        model,
        session,
      })
      .then(() => {
        // toast notification
        toast.success("Here is the answer", {
          id: notification,
        });
      });
  };
  return (
    <div className="customBg rounded-lg">
      <form
        onSubmit={submitHandler}
        className="p-2  flex items-center justify-between"
      >
        <input
          className="flex-1 focus:outline-none bg-transparent rounded-lg h-full p-3
         "
          type="text"
          placeholder="Type your message..."
          value={userPrompt}
          onChange={(e) => setUserPrompt(e.target.value)}
        />
        <button
          type="submit"
          disabled={!userPrompt}
          className="disabled:cursor-not-allowed px-3 py-3 bg-pink-100 rounded-full disabled:bg-red-300 font-semibold"
        >
          <PaperAirplaneIcon className="w-6 h-6 -rotate-45" />
        </button>
      </form>
    </div>
  );
};

export default ChatInput;
