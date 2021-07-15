import {FC, memo} from "react";
import { Link } from "react-router-dom";
import AuthHero from "../components/AuthHero";

interface Props {}

const Login: FC<Props> = (props) => {
    return (
        <div className="flex flex-row justify-between">
        <div>
            This is login page.
            Don't have an account. <Link to="/signup"><span className="text-blue-500">Click here.</span></Link>
            <Link to="/dashboard"><span className="text-blue-500">Go to dashboard</span></Link>
        </div>
        <AuthHero></AuthHero>
        </div>
    );
};

Login.defaultProps = {};

export default memo(Login);