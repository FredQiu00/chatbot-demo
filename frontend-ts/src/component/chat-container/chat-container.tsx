import React, { useState, useRef, useEffect } from 'react';
import MsgInputArea from './message-input';
import MessagePanel from './message-panel';
import { Message, MessagePanelHandle } from './type'; // Ensure you have the correct path

const Container: React.FC = () => {
    const [messages, setMessages] = useState<Message[]>([]);
    const messageEndRef = useRef<MessagePanelHandle>(null);

    const handleNewMessage = (newMessage: Message) => {
        setMessages(prevMessages => [...prevMessages, newMessage]);
    };

    useEffect(() => {
        if (messageEndRef.current) {
            messageEndRef.current.scrollToBottom();
        }
    }, [messages]);

    return (
        <div className="flex h-[100vh] w-full flex-col">
        <MessagePanel ref={messageEndRef} messages={messages} />
        <MsgInputArea onSend={handleNewMessage} />
        </div>
    );
};

export default Container;
