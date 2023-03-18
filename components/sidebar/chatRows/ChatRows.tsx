"use client";
import {
  ChatBubbleOvalLeftEllipsisIcon,
  TrashIcon,
} from "@heroicons/react/24/outline";
import { collection, deleteDoc, doc, orderBy, query } from "firebase/firestore";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useCollection } from "react-firebase-hooks/firestore";
import { db } from "../../../firebase/firebase";

type Props = {
  id: string;
};

const ChatRows = ({ id }: Props) => {
  const path = usePathname();
  const router = useRouter();
  const { data: session } = useSession();
  const [active, setActive] = useState(false);
  const [messages] = useCollection(
    collection(db, "users", session?.user?.email!, "chats", id, "messages")
  );
  useEffect(() => {
    if (!path) return;
    setActive(path.includes(id));
  }, [path]);

  const deleteChat = async () => {
    if (window.confirm("Are you sure you want to delete this chat?")) {
      await deleteDoc(doc(db, "users", session?.user?.email!, "chats", id));
      router.replace("/");
    }
  };
  const chatTitle = messages?.docs[messages?.docs.length - 1]
    ?.data()
    .text.slice(0, 20);

  return (
    <Link
      href={`/chat/${id}`}
      className={`flex justify-between items-center my-3 p-3 rounded-md ${
        active ? "customBg" : "bg-[#F0F2F4]"
      }`}
    >
      <div className="flex items-center">
        <ChatBubbleOvalLeftEllipsisIcon className="w-6 h-6 mr-1" />

        <p className="flex-1 hidden md:block">
          {chatTitle ? chatTitle + "...." : "New Chat"}
        </p>
      </div>
      <div>
        <TrashIcon
          onClick={deleteChat}
          className="w-6 h-6 hover:text-red-500"
        />
      </div>
    </Link>
  );
};

export default ChatRows;
