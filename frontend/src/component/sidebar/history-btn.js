import React from "react";
import { ReactComponent as ArchiveIcon } from "../svgs/archive.svg";

// Find a better way of doing this
const MONTH = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"];

const HistoryBtn = ({ props }) => {
    const { title, today } = props;
    const date_created = today.getDate() + " " + MONTH[today.getMonth()];

    return (
        <button
            className="flex items-center w-full rounded-lg bg-white p-3 text-left text-gray-700 transition-colors duration-200 hover:bg-gray-100 focus:outline-none dark:bg-gray-800 dark:text-gray-200 dark:hover:bg-gray-700"
        >
            <div className="flex-grow">
                <h1 className="text-sm font-medium capitalize">{title}</h1>
                <p className="text-xs text-gray-500 dark:text-gray-400">{date_created}</p>
            </div>
            <ArchiveIcon className="ml-2 h-6 w-6 rounded-lg p-1 text-gray-500 hover:bg-gray-300 dark:text-gray-300" />
        </button>
    );
}

export default HistoryBtn;
