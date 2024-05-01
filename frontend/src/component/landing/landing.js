import React from "react";
import SideBar from "../sidebar/sidebar";
import Container from "../chat-container/chat-container";

const Landing = () => {
    return (
        <div className="flex">
            <SideBar />
            <Container />
        </div>
    )
}

export default Landing;