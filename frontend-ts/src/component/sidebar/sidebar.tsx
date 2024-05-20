import React, { useState } from "react";
import { ReactComponent as UserIcon } from "../svgs/user.svg";
import { ReactComponent as SettingIcon } from "../svgs/setting.svg";
import { ReactComponent as LogoIcon } from "../svgs/logo.svg";
import { chatData } from "../chat/chat-demo";
import { HistoryEntry } from "./type";
import HistoryList from "./history-list";
import NewChatBtn from "./create-chat";

const SideBar: React.FC = () => {
  // for demo only, move this to user context once the db are set
  // correlated to chatIds field in User interface
  const demoHistoryEntries: HistoryEntry[] = chatData.map(chat => chat.meta);
  const [historyEntries, setHistoryEntries] = useState<HistoryEntry[]>(demoHistoryEntries);

  return (
    <>
      <aside className="flex">
        <div className="flex h-[100svh] w-60 flex-col overflow-y-auto bg-slate-50 pt-8 dark:border-slate-700 dark:bg-slate-900 sm:h-[100vh] sm:w-64">
          <div className="flex px-4">
            <LogoIcon className="h-7 w-7 text-blue-600" />
            <h2 className="px-4 text-lg font-medium text-slate-800 dark:text-slate-200">
              Chats
            </h2>
          </div>
          <NewChatBtn props={{setHistoryEntries}} />
          <HistoryList props={{historyEntries, setHistoryEntries}} />
          <div className="mt-auto w-full space-y-4 px-2 py-4">
            <button className="flex w-full gap-x-2 rounded-lg px-3 py-2 text-left text-sm font-medium text-slate-700 transition-colors duration-200 hover:bg-slate-200 focus:outline-none dark:text-slate-200 dark:hover:bg-slate-800">
              <UserIcon className="h-6 w-6" />
              User
            </button>
            <button className="flex w-full gap-x-2 rounded-lg px-3 py-2 text-left text-sm font-medium text-slate-700 transition-colors duration-200 hover:bg-slate-200 focus:outline-none dark:text-slate-200 dark:hover:bg-slate-800">
              <SettingIcon className="h-6 w-6" />
              Settings
            </button>
          </div>
        </div>
      </aside>
    </>
  );
};

export default SideBar;
