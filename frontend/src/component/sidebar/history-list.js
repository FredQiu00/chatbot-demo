import React from "react";
import HistoryBtn from "./history-btn";

const HistoryList = () => {
    const title = "Tailwind CSS";
    const today = new Date();
    const props = { title, today }
    return (
        <div className="history-view">
            <HistoryBtn props={props}/>
        </div>
    );
}

export default HistoryList;