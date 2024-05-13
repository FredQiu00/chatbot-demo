export interface HistoryEntry {
    title: string;
    today: Date;
    chatId: string;
}

export interface HistoryBtnProps {
    props: HistoryEntry;
    onRemove: () => void;
    isSelected: boolean;
}

export interface HistoryListProps {
    props: {
        historyEntries: HistoryEntry[];
        setHistoryEntries: React.Dispatch<React.SetStateAction<HistoryEntry[]>>;
    }
}

export interface NewChatBtnProps {
    props: {
        setHistoryEntries: React.Dispatch<React.SetStateAction<HistoryEntry[]>>;
    }
}