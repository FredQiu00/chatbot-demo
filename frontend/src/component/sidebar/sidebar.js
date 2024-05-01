import React from "react";
import NavBar from "./navbar";
import ChatHistory from "./chat-history";

const SideBar = () => {
    return (
        <aside className="flex">
            <NavBar />
            <ChatHistory />
        </aside>
    )
}

export default SideBar;