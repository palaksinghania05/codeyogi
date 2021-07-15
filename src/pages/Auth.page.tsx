import {FC, memo} from "react";
import { Route, Switch } from "react-router-dom";
import AuthHero from "../components/AuthHero";
import LoginPage from "./Login.page";
import SignUpPage from "./SignUp.page";

interface Props {}

const Auth: FC<Props> = (props) => {
    return (
        <div className="flex flex-row justify-between">
          <Switch>
            <Route path="/login" exact>
                <LoginPage></LoginPage>
            </Route>
            <Route path="/signup" exact>
                <SignUpPage></SignUpPage>
            </Route>
          </Switch>
          <AuthHero></AuthHero>
        </div>
    );
};

Auth.defaultProps = {};

export default memo(Auth);