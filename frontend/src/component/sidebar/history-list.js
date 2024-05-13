import React from "react";
import HistoryBtn from "./history-btn";

const HistoryList = ({ props }) => {
    const { historyEntries, setHistoryEntries } = props;
    const removeEntry = (index) => {
        const newEntries = historyEntries.filter((_, i) => i !== index);
        setHistoryEntries(newEntries);
    };

    return (
        <div className="history-view h-3/4 space-y-4 overflow-y-auto border-b border-slate-300 my-2 px-2 py-4 dark:border-slate-700">
            {historyEntries.map((props, index) => (
                <HistoryBtn key={index} props={props} onRemove={() => removeEntry(index)} />
            ))}
        </div>
    );
}

export default HistoryList;
