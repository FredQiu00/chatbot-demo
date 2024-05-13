import React, { ReactNode } from "react";

export interface User {
    id: string;
    name: string;
    email: string;
    phone: string;
    chatIds?: string[];
}
  
export interface UserContextProps {
    user: User | null;
    setUser: React.Dispatch<React.SetStateAction<User | null>>;
    currentChat: string | null;
    setCurrentChat: React.Dispatch<React.SetStateAction<string | null>>;
    currentWindow: Chat[] | null;
    setCurrentWindow: React.Dispatch<React.SetStateAction<Chat[] | null>>;
}

export interface UserProviderProps {
    children: ReactNode;
}

export interface Chat {
    userPrompts: string;
    aiResponse: string;
}

export interface ChatBlock {
    chatId: string;
    messages: Chat[];
}