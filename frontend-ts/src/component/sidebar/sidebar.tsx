import React, { useState } from "react";
import { useUser } from "../user/user-info";
import { ReactComponent as LogoutIcon } from "../svgs/logout.svg";
import { ReactComponent as LogoIcon } from "../svgs/logo.svg";
import { HistoryEntry } from "./type";
import HistoryList from "./history-list";
import NewChatBtn from "./create-chat";

const SideBar: React.FC = () => {
  // for demo only, move this to user context once the db are set
  // correlated to chatIds field in User interface
  const [historyEntries, setHistoryEntries] = useState<HistoryEntry[]>([]);

  const { user, setUser } = useUser();

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
                  <div className="relative mt-auto w-full space-y-4 px-2 py-4">
                      <div className="flex items-center justify-between">
                          <div className="flex">
                          <div className="relative inline-flex">
                              <span
                                className="absolute top-0 right-0 h-3 w-3 rounded-full border bg-green-600 dark:border-slate-900 dark:bg-green-600 dark:text-slate-100"
                              ></span>
                              <img
                                src="https://source.unsplash.com/40x40/?portrait"
                                alt="user"
                                className="h-10 w-10 rounded-full bg-slate-400 dark:border-slate-700"
                              />
                          </div>
                          <div className="ml-4 flex flex-col">
                              <h3 className="text-sm font-bold text-slate-900 dark:text-slate-200">
                                  {user?.name}
                              </h3>
                              <span className="text-xs text-slate-400">{user?.email}</span>
                          </div>
                          </div>
                          <span
                            className="cursor-pointer rounded-full bg-green-600/10 px-2.5 py-1 text-xs font-semibold leading-5 text-green-600"
                          >
                              Free
                          </span>
                      </div>
                      <button
                          className="flex w-full gap-x-2 rounded-lg py-2 text-left text-sm font-medium text-slate-700 transition-colors duration-200 hover:bg-slate-200 focus:outline-none dark:text-slate-200 dark:hover:bg-slate-800"
                          onClick={() => setUser(null)}
                        >
                          <LogoutIcon className="h-6 w-6 mr-2" />
                          Log Out
                      </button>
                  </div>
            </div>
        </aside>
    </>
  );
};

export default SideBar;
