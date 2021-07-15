import {FC, memo} from "react";
import { Link } from "react-router-dom";

interface Props {}

const SignUp: FC<Props> = (props) => {
    return (
        <div>
            This is signup page.
            Already have an account. <Link to="/login"><span className="text-blue-500">Click here.</span></Link>
           
        </div>
    );
};

SignUp.defaultProps = {};

export default memo(SignUp);