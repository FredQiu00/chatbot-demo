import React from "react";
import { ReactComponent as ArchiveIcon } from "../svgs/archive.svg";
import { HistoryBtnProps } from "./type";
import { useUser } from "../user/user-info";

const MONTH = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

const HistoryBtn: React.FC<HistoryBtnProps> = ({ props, onRemove, isSelected }) => {
    const { title, today, chatId } = props;
    const { setCurrentChat } = useUser();
    const date_created = today.getDate() + " " + MONTH[today.getMonth()];

    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        // Something like verifications of e.currentTarget.value is an existing chatId of user
        setCurrentChat(e.currentTarget.value);
        console.log(e.currentTarget.value);
    }

    return (
        <button
            className={`flex items-center w-full rounded-lg p-3 text-left text-gray-700 transition-colors duration-200 hover:bg-slate-200 focus:outline-none dark:text-gray-200 dark:hover:bg-slate-700 group ${
                isSelected ? "bg-slate-200 dark:bg-slate-700" : "bg-slate-50 dark:bg-gray-800"
            }`}
            onClick={handleClick}
            value = {chatId}
        >
        <div className="flex-grow">
            <h1 className="text-sm font-medium capitalize">{title}</h1>
            <p className="text-xs text-gray-500 dark:text-gray-400">{date_created}</p>
        </div>
        <ArchiveIcon
            className="ml-2 h-6 w-6 rounded-lg p-1 text-gray-500 dark:text-gray-300 opacity-0 group-hover:opacity-100 transition-opacity duration-200"
            onClick={(e) => {
                e.stopPropagation();
                onRemove();
            }}
        />
        </button>
    );
}

export default HistoryBtn;
  