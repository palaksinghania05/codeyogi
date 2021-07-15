import {FC, memo} from "react";

interface Props {}

const SideBar: FC<Props> = (props) => {
    return (
        <div className="h-screen w-80 bg-gray-400">
            SideBar
        </div>
    );
};

SideBar.defaultProps = {};

export default memo(SideBar);