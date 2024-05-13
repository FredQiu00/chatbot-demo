import React from "react";
import { MessageProp } from "../type";

const PromptBubble: React.FC<MessageProp> = ({ content }) => {
    return (
        <div className="flex flex-row-reverse items-start">
            <img
                className="ml-2 h-8 w-8 rounded-full"
                src="https://dummyimage.com/128x128/363536/ffffff&text=J"
            />
            <div
                className="flex rounded-b-xl rounded-tl-xl bg-slate-50 p-4 dark:bg-slate-800 sm:max-w-md md:max-w-2xl"
            >
                <p>{content}</p>
            </div>
        </div>
    );
}

export default PromptBubble;