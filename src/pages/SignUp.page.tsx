import {FC, memo} from "react";

interface Props {}

const SignUp: FC<Props> = (props) => {
    return (
        <div>
            This is signup page.
        </div>
    );
};

SignUp.defaultProps = {};

export default memo(SignUp);