import React from "react";
import SearchBar from "./search-bar";
import HistoryList from "./history-list";

const ChatHistory = () => {
    return (
        <div
            className="h-screen w-52 overflow-y-auto bg-slate-50 py-8 dark:bg-slate-900 sm:w-60"
        >
            <div className="flex items-start">
                <h2
                className="inline px-5 text-lg font-medium text-slate-800 dark:text-slate-200"
                >
                Chats
                </h2>
                {/* <span className="rounded-full bg-blue-600 px-2 py-1 text-xs text-slate-200">
                24
                </span> */}
            </div>
  
            <div className="mx-2 mt-8 space-y-4">
                <SearchBar />
                <HistoryList />
            </div>
        </div>
    );
}

export default ChatHistory;