import React from "react";
import Btn from "./btn";
import { ICON_PATH } from "./path";

const RatingBtn = () => {

    return (
        <React.Fragment>
            <Btn paths={[ICON_PATH.uphold]} />
            <Btn paths={[ICON_PATH.downhold]} />
            <Btn paths={ICON_PATH.copy} />
        </React.Fragment>
    );
};

export default RatingBtn;
