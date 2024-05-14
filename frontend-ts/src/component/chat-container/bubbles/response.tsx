import React from "react";
import RatingBtn from "../rating/rating";
import { MessageProp } from "../type";

const ResponseBubble: React.FC<MessageProp> = ({ content }) => {
    return (
        <div className="flex items-start">
            <img
                className="mr-2 h-8 w-8 rounded-full"
                src="https://dummyimage.com/128x128/354ea1/ffffff&text=G"
                alt="G"
            />

            <div
                className="flex min-h-[85px] rounded-b-xl rounded-tr-xl bg-slate-50 p-4 dark:bg-slate-800 sm:min-h-0 sm:max-w-md md:max-w-2xl"
            >
                <p>{content}</p>
            </div>
            <div
                className="ml-2 mt-1 flex flex-col-reverse gap-2 text-slate-500 sm:flex-row"
            >
                <RatingBtn />
            </div>
        </div>
    );
}

export default ResponseBubble;