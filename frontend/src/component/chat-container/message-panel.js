import React, { useImperativeHandle, useRef, useEffect } from "react";
import PromptBubble from "./bubble/prompt";
import ResponseBubble from "./bubble/response";

const MessagePanel = React.forwardRef(({ messages }, ref) => {
    const panelRef = useRef(null);

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
                message.type === 'prompt' ? 
                    <PromptBubble key={index} content={message.text} /> :
                    <ResponseBubble key={index} content={message.text} />
            )}
        </div>
    );
});

export default MessagePanel;
