import React from "react";
import SideBar from "../sidebar/sidebar";
import Container from "../chat-container/chat-container";
import { ChatProvider } from "../chat/chat-info";
import { useUser } from "../user/user-info";

const Unauthorized: React.FC = () => (
  <div className="flex flex-col justify-center items-center h-screen w-full bg-red-200 text-red-900 shadow-sm dark:bg-red-900 dark:text-red-300 p-6">
    <h1 className="text-4xl font-bold">401 Unauthorized</h1>
    <p className="text-lg font-light mt-4">
      You do not have access to this page. Please log in to continue.
    </p>
  </div>
);

const Landing: React.FC = () => {
  const { user } = useUser();

  return user ? (
        <ChatProvider>
            <div className="flex">
                <SideBar />
                <Container />
            </div>
        </ChatProvider>
    ) : (
        <Unauthorized />
    );
};

export default Landing;
