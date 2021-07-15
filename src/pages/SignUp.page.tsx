import {FC, memo} from "react";
import { Link } from "react-router-dom";
import AuthHero from "../components/AuthHero";

interface Props {}

const SignUp: FC<Props> = (props) => {
    return (
        <div className="flex flex-row justify-between">
        <div>
            This is signup page.
            Already have an account. <Link to="/login"><span className="text-blue-500">Click here.</span></Link>
           
        </div>
        <AuthHero></AuthHero>
        </div>
    );
};

SignUp.defaultProps = {};

export default memo(SignUp);