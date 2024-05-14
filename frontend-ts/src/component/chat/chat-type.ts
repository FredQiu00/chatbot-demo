import { ReactNode } from "react";
import { Message } from "../chat-container/type";

export interface ChatBlock {
    chatId: string;
    messages: Message[];
}

export interface ChatContextProps {
    currentChat: string | null;
    setCurrentChat: (chatId: string) => void,
    currentWindow: Message[];
    setCurrentWindow: React.Dispatch<React.SetStateAction<Message[]>>;
}

export interface ChatProviderProps {
    children: ReactNode;
}