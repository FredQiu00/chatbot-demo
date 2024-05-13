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
}

export interface UserProviderProps {
    children: ReactNode;
}