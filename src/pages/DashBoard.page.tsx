import {FC, memo} from "react";
import { Link } from "react-router-dom";

interface Props {}

const DashBoard: FC<Props> = (props) => {
    return (
        <div>
            This is dashboard page.
            <Link to="/recordings"><span className="text-blue-500">Go to recordings</span></Link>
        </div>
    );
};

DashBoard.defaultProps = {};

export default memo(DashBoard);