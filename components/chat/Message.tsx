import { DocumentData } from "firebase/firestore";

type Props = {
  message: DocumentData;
};
const Message = ({ message }: Props) => {
  const isChatGPT = message.user.name === "ChatGPT";
  return (
    <div className="py-4">
      <div className="flex space-x-3 max-w-2xl px-2">
        <img
          src={`${
            !isChatGPT
              ? message.user.avatar
              : "https://i.postimg.cc/rFbxKQzM/chat-GPT-icon.png"
          }`}
          alt=""
          className="w-8 h-8 rounded-md"
        />
        <p
          className={`p-3 tracking-wide leading-7 rounded-md ${
            isChatGPT ? "customBg" : "bg-[#F0F2F4]"
          } transition-all duration-200 ease-out`}
        >
          {message.text}
        </p>
      </div>
    </div>
  );
};

export default Message;
