"use client";
import { ChatBubbleLeftIcon, TrashIcon } from "@heroicons/react/24/outline";
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
    await deleteDoc(doc(db, "users", session?.user?.email!, "chats", id));
    router.replace("/");
  };
  return (
    <Link
      href={`/chat/${id}`}
      className={`flex justify-around items-center my-3 p-3 rounded-md ${
        active ? "bg-pink-200" : "customBg"
      }`}
    >
      <div className="flex items-center">
        <ChatBubbleLeftIcon className="w-6 h-6 mr-1" />
        <p></p>
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
