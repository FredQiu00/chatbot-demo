import React, { useRef, useEffect } from 'react';
import MsgInputArea from './message-input';
import MessagePanel from './message-panel';
import { Message, MessagePanelHandle } from './type'; // Ensure you have the correct path
import { useChat } from '../chat/chat-info';
import LandingContainer from './landing-container';

const Container: React.FC = () => {
    const messageEndRef = useRef<MessagePanelHandle>(null);
    const {
        currentChat,
        currentWindow,
        setCurrentWindow
    } = useChat();

    const handleNewMessage = (newMessage: Message) => {
        setCurrentWindow(prevMessages => [...prevMessages, newMessage]);
    };

    useEffect(() => {
        if (messageEndRef.current) {
            messageEndRef.current.scrollToBottom();
        }
    }, [currentWindow]);

    return (
        <div className="flex h-[100vh] w-full flex-col">
            <MessagePanel ref={messageEndRef} messages={currentWindow} />
            {currentChat ? <MsgInputArea onSend={handleNewMessage} /> : <LandingContainer />}
        </div>
    );
};

export default Container;
