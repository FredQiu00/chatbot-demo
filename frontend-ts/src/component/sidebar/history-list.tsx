import React from "react";
import HistoryBtn from "./history-btn";
import { HistoryEntry, HistoryListProps } from "./type";
import { useChat } from "../chat/chat-info";

const HistoryList: React.FC<HistoryListProps> = ({ props }) => {
    const { historyEntries, setHistoryEntries } = props;
    const {
        currentChat,
        setCurrentChat,
        setCurrentWindow,
        chatHistories,
        setChatHistories } = useChat();

    const removeEntry = (index: number) => {
        const entryToRemove = historyEntries[index];
        const newEntries = historyEntries.filter((_, i) => i !== index);
        setHistoryEntries(newEntries);
        setCurrentChat('');

        setCurrentWindow([]);
        
        const { [entryToRemove.chatId]: _, ...remainingHistories } = chatHistories;
        setChatHistories(remainingHistories);
    };

    return (
        <div className="history-view h-3/4 space-y-4 overflow-y-auto border-b border-slate-300 my-2 px-2 py-4 dark:border-slate-700">
            {historyEntries.map((entry, index) => {
                const input: HistoryEntry = {
                    title: entry.title,
                    date: entry.date,
                    chatId: entry.chatId,
                };
                return (
                    <HistoryBtn
                        key={index}
                        props={input}
                        isSelected={currentChat === entry.chatId}
                        onRemove={() => removeEntry(index)}
                    />
                );
            })}
        </div>
    );
};

export default HistoryList;
