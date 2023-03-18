"use client";
import { PowerIcon } from "@heroicons/react/24/outline";
import { collection, orderBy, query } from "firebase/firestore";
import { signOut, useSession } from "next-auth/react";
import { useCollection } from "react-firebase-hooks/firestore";
import { db } from "../../firebase/firebase";
import ChatRows from "./chatRows/ChatRows";
import NewChat from "./newChat/NewChat";

const Sidebar = () => {
  const { data: session } = useSession();
  const [chats, loading, error] = useCollection(
    session &&
      query(
        collection(db, "users", session?.user?.email!, "chats"),
        orderBy("createdAt", "asc")
      )
  );

  return (
    <div className="p-2 flex flex-col h-full shadow-lg border-r-2">
      <div className="flex-1">
        <div>
          <NewChat />
          {chats?.docs.map((chat) => (
            <ChatRows key={chat.id} id={chat.id} />
          ))}
        </div>
      </div>
      {session && (
        <div className="text-center md:flex justify-between items-center md:bg-[#F0F2F4] rounded-lg">
          <img
            className="w-12 h-12 rounded-full mx-auto"
            src={session?.user?.image!}
            alt="user-profile"
          />
          <p className="mt-2 uppercase">{session?.user?.name!}</p>
          <PowerIcon
            onClick={() => signOut()}
            className="h-12 my-4 w-12 p-1 mx-auto border rounded-full cursor-pointer customBg"
          />
        </div>
      )}
    </div>
  );
};

export default Sidebar;
