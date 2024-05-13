import React, { createContext, useContext, useEffect, useState } from 'react';
import {
    User,
    UserContextProps,
    UserProviderProps,
    Chat,
} from './user-type';

const UserContext = createContext<UserContextProps | undefined>(undefined);

export const UserProvider: React.FC<UserProviderProps> = ({ children }) => {
    const [user, setUser] = useState<User | null>(null);
    const [currentChat, setCurrentChat] = useState<string | null>(null);
    const [currentWindow, setCurrentWindow] = useState<Chat[] | null>(null);

    useEffect(() => {
        // fetch chat history given chat id: currentChat
        console.log(currentChat);
        // call set current window here
    }, [currentChat])
    const value = {
        user,
        setUser,
        currentChat,
        setCurrentChat,
        currentWindow,
        setCurrentWindow,
    }
    return (
        <UserContext.Provider value={value}>
          {children}
        </UserContext.Provider>
    );
};

export const useUser = (): UserContextProps => {
    const context = useContext(UserContext);
    if (!context) {
        throw new Error('useUser must be used within a UserProvider');
    }
    return context;
};