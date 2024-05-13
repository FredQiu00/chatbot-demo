import { ReactNode } from "react";

export interface Chat {
    userPrompts: string;
    aiResponse: string;
}

export interface ChatBlock {
    chatId: string;
    messages: Chat[];
}

export interface ChatContextProps {
    currentChat: string | null;
    setCurrentChat: React.Dispatch<React.SetStateAction<string | null>>;
    currentWindow: Chat[] | null;
    setCurrentWindow: React.Dispatch<React.SetStateAction<Chat[] | null>>;
}

export interface ChatProviderProps {
    children: ReactNode;
}