import {FC, memo} from "react";

interface Props {}

const DashBoard: FC<Props> = (props) => {
    return (
        <div>
            This is dashboard page.
        </div>
    );
};

DashBoard.defaultProps = {};

export default memo(DashBoard);