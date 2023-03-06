import { PlusIcon } from "@heroicons/react/24/outline";
import React from "react";

const NewChat = () => {
  return (
    <div className="flex items-center space-x-1 px-8 rounded-md cursor-pointer py-3 hover:bg-pink-100 transition-all duration-200 ease-out customBg">
      <PlusIcon className="h-4 w-4" />
      <p>New Chat</p>
    </div>
  );
};

export default NewChat;
