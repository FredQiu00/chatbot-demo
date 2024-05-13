import React, { createContext, useContext, useEffect, useState } from 'react';
import {
    Chat,
    ChatContextProps,
    ChatProviderProps,
} from './chat-type';

const ChatContext = createContext<ChatContextProps | undefined>(undefined);

export const ChatProvider: React.FC<ChatProviderProps> = ({ children }) => {
    const [currentChat, setCurrentChat] = useState<string | null>(null);
    const [currentWindow, setCurrentWindow] = useState<Chat[] | null>(null);

    useEffect(() => {
        // fetch chat history given chat id: currentChat
        console.log(currentChat);
        // call set current window here
    }, [currentChat])
    const value = {
        currentChat,
        setCurrentChat,
        currentWindow,
        setCurrentWindow,
    }
    return (
        <ChatContext.Provider value={value}>
          {children}
        </ChatContext.Provider>
    );
};

export const useChat = (): ChatContextProps => {
    const context = useContext(ChatContext);
    if (!context) {
        throw new Error('useChat must be used within a ChatProvider');
    }
    return context;
};