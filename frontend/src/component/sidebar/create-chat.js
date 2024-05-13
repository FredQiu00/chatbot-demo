import React from "react";
import { ReactComponent as NewChatIcon } from "../svgs/newchat.svg";

const NewChatBtn = ({ props }) => {
    const { setHistoryEntries } = props;
    const demoTitle = "demo title";
    const demoTime = new Date();
    
    return (
        <div className="mx-2 mt-8">
            <button
                className="flex w-full gap-x-4 rounded-lg border border-slate-300 p-4 text-left text-sm font-medium text-slate-700 transition-colors duration-200 hover:bg-slate-200 focus:outline-none dark:border-slate-700 dark:text-slate-200 dark:hover:bg-slate-800"
                onClick={() => setHistoryEntries((prevEntries) => [{title: demoTitle, today: demoTime}, ...prevEntries])}
            >
                <NewChatIcon className="h-5 w-5" />
                New Chat
            </button>
        </div>
    );
}
    

export default NewChatBtn;