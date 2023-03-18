"use client";
import { HomeIcon, PlusIcon } from "@heroicons/react/24/outline";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import React from "react";
import { db } from "../../../firebase/firebase";
import Link from "next/link";
const NewChat = () => {
  const router = useRouter();
  const { data: session } = useSession();

  const createNewChat = async () => {
    try {
      const doc = await addDoc(
        collection(db, "users", session?.user?.email!, "chats"),
        {
          userId: session?.user?.email,
          createdAt: serverTimestamp(),
        }
      );

      router.push(`/chat/${doc.id}`);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <Link href="/">
        <HomeIcon className="h-12 mb-4 w-12 p-1 mx-auto border rounded-full customBg" />
      </Link>
      <div
        onClick={createNewChat}
        className="md:flex items-center space-x-1 px-2 rounded-md cursor-pointer py-3 customBg"
      >
        <PlusIcon className="h-4 w-4 hidden md:block" />
        <p>New Chat</p>
      </div>
    </div>
  );
};

export default NewChat;
