import React from "react";
import { ReactComponent as NewChatIcon } from "../svgs/newchat.svg";
import { HistoryEntry, NewChatBtnProps } from "./type";
import { useChat } from "../chat/chat-info";

const NewChatBtn: React.FC<NewChatBtnProps> = ({ props }) => {
    const { setHistoryEntries } = props;
    const demoTitle = "demo title";
    const demoTime = new Date();
    const demoChatId = "demo-chat-id";

    const { setCurrentChat } = useChat();

    const handleClick = () => {
        const tempId = `${demoChatId}`
        const newChat: HistoryEntry = {
            title: demoTitle,
            today: demoTime,
            chatId: tempId,
        };
        console.log(newChat)
        setHistoryEntries((prevEntries) => [newChat, ...prevEntries]);
        setCurrentChat(newChat.chatId + '0'); // hardcode for demo only
    }

    /**
     * For future modification:
     *      POST request to create a chat and return an uuid
     * */
  
    return (
      <div className="mx-2 mt-8">
        <button
          className="flex w-full gap-x-4 rounded-lg border border-slate-300 p-4 text-left text-sm font-medium text-slate-700 transition-colors duration-200 hover:bg-slate-200 focus:outline-none dark:border-slate-700 dark:text-slate-200 dark:hover:bg-slate-800"
          onClick={handleClick}
        >
          <NewChatIcon className="h-5 w-5" />
          New Chat
        </button>
      </div>
    );
  }
  
  export default NewChatBtn;
  