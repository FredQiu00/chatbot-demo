import React, { useState, useRef, useEffect } from "react";
import MsgInputArea from "./message-input";
import MessagePanel from "./message-panel";

const Container = () => {
    const [messages, setMessages] = useState([]);
    const messageEndRef = useRef(null);

    const handleNewMessage = (newMessage) => {
        setMessages(prevMessages => [...prevMessages, newMessage]);
    };

    useEffect(() => {
        if (messageEndRef.current) {
            messageEndRef.current.scrollToBottom();
        }
    }, [messages]);

    return (
        <>
            <div className="flex h-[100vh] w-full flex-col">
                <MessagePanel ref={messageEndRef} messages={messages} />
                <MsgInputArea onSend={handleNewMessage} />
            </div>
        </>
    );   
}

export default Container;
