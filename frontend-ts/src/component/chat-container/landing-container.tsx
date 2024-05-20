import React from "react";
import { ReactComponent as LogoIcon } from "../svgs/logo.svg";

const LandingContainer: React.FC = () => {
    return (
        <div className="flex flex-col justify-center items-center h-screen w-full overflow-hidden bg-slate-200 text-slate-900 shadow-sm dark:bg-slate-900 dark:text-slate-300 p-6">
            <div className="flex flex-col items-center space-y-4 text-center">
                <div className="flex items-center space-x-4">
                    <LogoIcon className="h-20 w-20" />
                    <h1 className="text-4xl font-bold">ChatUI</h1>
                </div>
                <p className="text-lg font-light">
                    Select a chat from the left or create a new chat to start
                </p>
            </div>
        </div>
    );
};

export default LandingContainer;
