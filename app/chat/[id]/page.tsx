import React from "react";
import Chat from "../../../components/chat/Chat";
import ChatInput from "../../../components/chat/ChatInput";

type Props = {
  params: {
    id: string;
  };
};
const ChatPage = ({ params: { id } }: Props) => {
  return (
    <div className="flex flex-col h-screen overflow-hidden p-3">
      <Chat chatId={id} />
      <ChatInput chatId={id} />
    </div>
  );
};

export default ChatPage;
