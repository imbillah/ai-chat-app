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
        orderBy("createdAt", "desc")
      )
  );

  return (
    <div className="p-2 flex flex-col h-screen">
      <div className="flex-1">
        <div>
          <NewChat />
          <div>{/* model selection */}</div>
          {
            /* maping throw the chat rows */
            chats?.docs.map((chat) => (
              <ChatRows key={chat.id} id={chat.id} />
            ))
          }
        </div>
      </div>
      {session && (
        <div className="text-center">
          <img
            className="w-12 h-12 rounded-full mx-auto"
            src={session?.user?.image!}
            alt="user-profile"
          />
          <p>{session?.user?.name!}</p>
          <PowerIcon
            onClick={() => signOut()}
            className="h-12 my-4 customBg text-white w-12 p-1 mx-auto border rounded-full cursor-pointer hover:bg-pink-200"
          />
        </div>
      )}
    </div>
  );
};

export default Sidebar;
