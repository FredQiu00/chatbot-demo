import React, { useState } from "react";
import { ReactComponent as NewChatIcon } from "../svgs/newchat.svg";
import { ReactComponent as CloseIcon } from "../svgs/close.svg";
import { HistoryEntry, NewChatBtnProps } from "./type";
import { useChat } from "../chat/chat-info";

const NewChatBtn: React.FC<NewChatBtnProps> = ({ props }) => {
  const { setHistoryEntries } = props;
  const { setCurrentChat } = useChat();
  const [isModalOpen, setModalOpen] = useState<boolean>(false);
  const [chatTitle, setChatTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("")

  const handleCreateChat = () => {
    const newChat: HistoryEntry = {
      title: chatTitle,
      date: new Date(),
      chatId: `chat-${Date.now()}`,
    };
    setHistoryEntries((prevEntries) => [newChat, ...prevEntries]);
    setCurrentChat(newChat.chatId);
    setModalOpen(false);
    setChatTitle('');
    setDescription('');
  };

  const handleOpenModal = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  return (
    <>
      <div className="mx-2 mt-8">
        <button
          className="flex w-full gap-x-4 rounded-lg border border-slate-300 p-4 text-left text-sm font-medium text-slate-700 transition-colors duration-200 hover:bg-slate-200 focus:outline-none dark:border-slate-700 dark:text-slate-200 dark:hover:bg-slate-800"
          onClick={handleOpenModal}
        >
          <NewChatIcon className="h-5 w-5" />
          New Chat
        </button>
      </div>
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-800 bg-opacity-75">
          <div className="bg-white rounded-lg shadow-lg w-1/3 p-6">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold">Create New Chat</h2>
              <button onClick={handleCloseModal} className="text-gray-500 hover:text-gray-700">
                <CloseIcon className="h-5 w-5" />
              </button>
            </div>
            <div className="mb-4">
              <label htmlFor="chatTitle" className="block text-sm font-medium text-gray-700">
                Chat Title
              </label>
              <input
                id="chatTitle"
                type="text"
                value={chatTitle}
                onChange={(e) => setChatTitle(e.target.value)}
                className="my-2 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
              <label htmlFor="description" className="block text-sm font-medium text-gray-700">
                Description
              </label>
              <textarea
                id="description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Describe a little about yourself"
                className="mt-1 block w-full h-3/5 p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>
            <div className="flex justify-end">
              <button
                onClick={handleCreateChat}
                className="px-4 py-2 bg-blue-500 text-white text-sm font-medium rounded-md shadow-sm hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                Create Chat
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default NewChatBtn;
