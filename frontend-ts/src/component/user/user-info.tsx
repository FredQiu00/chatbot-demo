import React, { createContext, useContext, useEffect, useState } from 'react';
import {
    User,
    UserContextProps,
    UserProviderProps,
} from './user-type';

const UserContext = createContext<UserContextProps | undefined>(undefined);

export const UserProvider: React.FC<UserProviderProps> = ({ children }) => {
    const [user, setUser] = useState<User | null>(null);

    const value = {
        user,
        setUser,
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