import React, { createContext, useContext, useState } from 'react';
import {
    User,
    UserContextProps,
    UserProviderProps,
} from './user-type';

const UserContext = createContext<UserContextProps | undefined>(undefined);

export const UserProvider: React.FC<UserProviderProps> = ({ children }) => {
    const [user, setUser] = useState<User | null>(null);
    const [usermeta, setUsermeta] = useState<string[]>([])

    const value = {
        user,
        setUser,
        usermeta,
        setUsermeta,
        // description,
        // setDescription,
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