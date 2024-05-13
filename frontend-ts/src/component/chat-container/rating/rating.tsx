import React from "react";
import { ReactComponent as CopyIcon } from '../../svgs/copy.svg';
import { ReactComponent as UpholdIcon } from '../../svgs/uphold.svg';
import { ReactComponent as DownholdIcon } from '../../svgs/downhold.svg';

const RatingBtn: React.FC = () => {

    return (
        <React.Fragment>
            <button className="hover:text-blue-600" type="button">
                <UpholdIcon className="h-5 w-5" />
            </button>
            <button className="hover:text-blue-600" type="button">
                <DownholdIcon className="h-5 w-5" />
            </button>
            <button className="hover:text-blue-600" type="button">
                <CopyIcon className="h-5 w-5" />
            </button>
        </React.Fragment>
    );
};

export default RatingBtn;
