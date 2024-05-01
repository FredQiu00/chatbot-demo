import React, { useState } from "react";
import { ReactComponent as FileIcon } from "../svgs/file-attach.svg";
import { ReactComponent as SendIcon } from "../svgs/send.svg";

const MsgInputArea = ({ onSend }) => {
    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (event) => {
        setInputValue(event.target.value);
    };

    /** TODO:
     * For prompt: Verify the validity of the message input (either fe or be, fe preferred, maybe call openai api to do this)
     * For response: return from endpoints
     */
    const handleSubmit = (event) => {
        event.preventDefault();
        if (inputValue.trim()) {
            const promptObj = {
                type: "prompt",
                text: inputValue,
            };
            const responseObj = {
                type: "response",
                text: "Figuring out what I should say...",
            };

            onSend(promptObj);
            setTimeout(() => onSend(responseObj), 2000);
            setInputValue('');
        }
    };

    const handleKeyDown = (event) => {
        if (event.key === 'Enter' && !event.shiftKey) {
            event.preventDefault();
            handleSubmit(new Event('submit'));
        }
    };

    return (
        <form
            className="flex w-full items-center bg-slate-200 p-2 dark:bg-slate-900"
            onSubmit={handleSubmit}
        >
            <label htmlFor="prompt" className="sr-only">Enter your prompt</label>
            <div>
                <button
                    className="hover:text-blue-600 dark:text-slate-200 dark:hover:text-blue-600 sm:p-2"
                    type="button"
                >
                    <FileIcon className="h-6 w-6" />
                    <span className="sr-only">Attach file</span>
                </button>
            </div>
            <textarea
                id="prompt"
                rows="1"
                className="mx-2 flex min-h-full w-full rounded-md border border-slate-300 bg-slate-200 p-2 text-base text-slate-900 placeholder-slate-400 focus:border-blue-600 focus:outline-none focus:ring-1 focus:ring-blue-600 dark:border-slate-300/20 dark:bg-slate-800 dark:text-slate-200 dark:placeholder-slate-400 dark:focus:border-blue-600 dark:focus:ring-blue-600"
                placeholder="Enter your prompt"
                value={inputValue}
                onChange={handleInputChange}
                onKeyDown={handleKeyDown}
            ></textarea>
            <div>
                <button
                    className="inline-flex hover:text-blue-600 dark:text-slate-200 dark:hover:text-blue-600 sm:p-2"
                    type="submit"
                >
                    <SendIcon className="h-6 w-6" />
                    <span className="sr-only">Send message</span>
                </button>
            </div>
        </form>
    );
}

export default MsgInputArea;
