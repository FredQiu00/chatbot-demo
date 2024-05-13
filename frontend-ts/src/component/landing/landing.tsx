import React from "react";
import SideBar from "../sidebar/sidebar";
import Container from "../chat-container/chat-container";
import { ChatProvider } from "../chat/chat-info";

const Landing: React.FC = () => {
    return (
        <ChatProvider>
            <div className="flex">
                <SideBar />
                <Container />
            </div>
        </ChatProvider>
    )
}

export default Landing;