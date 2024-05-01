import React from "react";

const Btn = ({ paths }) => {
    return (
        <button className="hover:text-blue-600" type="button">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
            >
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                {paths.map((pathData, index) => (
                    <path key={index} d={pathData}></path>
                ))}
            </svg>
        </button>
    );
};

export default Btn;