import React, { useImperativeHandle, useRef, useEffect, ForwardRefRenderFunction } from 'react';
import PromptBubble from './bubbles/prompt';
import ResponseBubble from './bubbles/response';
import { MessagePanelProps, MessagePanelHandle, MessageType } from './type';

const MessagePanel: ForwardRefRenderFunction<MessagePanelHandle, MessagePanelProps> = ({ messages }, ref) => {
    const panelRef = useRef<HTMLDivElement>(null);

    useImperativeHandle(ref, () => ({
        scrollToBottom: () => {
            if (panelRef.current) {
                panelRef.current.scrollTop = panelRef.current.scrollHeight;
            }
        }
    }));

    useEffect(() => {
        if (panelRef.current) {
            panelRef.current.scrollTop = panelRef.current.scrollHeight;
        }
    }, [messages]);

    return (
        <div
            ref={panelRef}
            className="msg-panel flex-1 space-y-6 overflow-y-auto bg-slate-200 p-6 text-sm leading-6 text-slate-900 shadow-sm dark:bg-slate-900 dark:text-slate-300 sm:text-base sm:leading-7"
        >
            {messages.map((message, index) =>
                message.type === MessageType.PROMPT ? 
                <PromptBubble key={index} content={message.content} /> :
                <ResponseBubble key={index} content={message.content} />
            )}
        </div>
    );
};

export default React.forwardRef(MessagePanel);
