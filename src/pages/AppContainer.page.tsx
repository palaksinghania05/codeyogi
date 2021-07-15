import {FC, memo} from "react";
import { Route, Switch } from "react-router-dom";
import SideBar from "../components/SideBar";
import DashBoardPage from "./DashBoard.page";
import LecturePage from "./Lecture.page";
import RecordingsPage from "./Recordings.page";

interface Props {}

const AppContainer: FC<Props> = (props) => {
    return (
        <div className="flex flex-row">
            <SideBar></SideBar>
            <Switch>
            <Route path="/dashboard">
                <DashBoardPage></DashBoardPage>
            </Route>
            <Route path="/recordings">
                <RecordingsPage></RecordingsPage>
            </Route>
            <Route path="/batch/:batchNumber/lecture/:lectureNumber">
                <LecturePage></LecturePage>
            </Route>
          </Switch>
        </div>
    );
};

AppContainer.defaultProps = {};

export default memo(AppContainer);