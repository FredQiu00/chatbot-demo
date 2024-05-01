import React from "react";
import { ReactComponent as ConversationIcon } from "../svgs/conversation.svg";
import { ReactComponent as HistoryIcon } from "../svgs/history.svg";
import { ReactComponent as UserIcon } from "../svgs/user.svg";
import { ReactComponent as SettingIcon } from "../svgs/setting.svg";
import { ReactComponent as LogoIcon } from "../svgs/logo.svg";

const NavBar = () => {
    return (
        <div
            className="flex h-screen w-12 flex-col items-center space-y-8 border-r border-slate-300 bg-slate-50 py-8 dark:border-slate-700 dark:bg-slate-900 sm:w-16"
        >
            <a href="#" className="mb-1">
                <LogoIcon className="h-7 w-7 text-blue-600" />
            </a>
            <a
                href="#"
                className="rounded-lg p-1.5 text-slate-500 transition-colors duration-200 hover:bg-slate-200 focus:outline-none dark:text-slate-400 dark:hover:bg-slate-800"
            >
                <ConversationIcon className="h-6 w-6" />
            </a>
            {/* <a
            href="#"
            className="rounded-lg bg-blue-100 p-1.5 transition-colors duration-200 dark:bg-slate-800 dark:text-blue-600"
            > */}
            <a
                href="#"
                className="rounded-lg p-1.5 text-slate-500 transition-colors duration-200 hover:bg-slate-200 focus:outline-none dark:text-slate-400 dark:hover:bg-slate-800"
            >
                <HistoryIcon className="h-6 w-6" />
            </a>
            <a
                href="#"
                className="rounded-lg p-1.5 text-slate-500 transition-colors duration-200 hover:bg-slate-200 focus:outline-none dark:text-slate-400 dark:hover:bg-slate-800"
            >
                <UserIcon className="h-6 w-6" />
            </a>
            <a
                href="#"
                className="rounded-lg p-1.5 text-slate-500 transition-colors duration-200 hover:bg-slate-200 focus:outline-none dark:text-slate-400 dark:hover:bg-slate-800"
            >
                <SettingIcon className="h-6 w-6" />
            </a>
        </div>
    );
}

export default NavBar;