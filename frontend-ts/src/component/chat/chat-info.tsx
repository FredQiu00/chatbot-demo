import React, { createContext, useContext, useEffect, useState } from 'react';
import { ChatContextProps, ChatProviderProps } from './chat-type';
import { Message } from '../chat-container/type';

const ChatContext = createContext<ChatContextProps | undefined>(undefined);

export const ChatProvider: React.FC<ChatProviderProps> = ({ children }) => {
    const [currentChat, setCurrentChatState] = useState<string | null>(null);
    const [currentWindow, setCurrentWindow] = useState<Message[]>([]);
    const [chatHistories, setChatHistories] = useState<{ [chatId: string]: Message[] }>({});

    useEffect(() => {
        if (currentChat) {
            setCurrentWindow(chatHistories[currentChat] || []);
        }
    }, [currentChat, chatHistories]);

    const setCurrentChat = (chatId: string) => {
        // Save current chat window to chatHistories
        if (currentChat) {
            setChatHistories(prevHistories => ({
                ...prevHistories,
                [currentChat]: currentWindow,
            }));
        }

        // Set the new chat ID
        setCurrentChatState(chatId);
    };

    const value = {
        currentChat,
        setCurrentChat,
        currentWindow,
        setCurrentWindow,
    };

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
