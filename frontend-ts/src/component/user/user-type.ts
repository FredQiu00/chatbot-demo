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
    usermeta: string[];
    setUsermeta: React.Dispatch<React.SetStateAction<string[]>>;
//     description: string;
//     setDescription: React.Dispatch<React.SetStateAction<string>>;
}

export interface UserProviderProps {
    children: ReactNode;
}