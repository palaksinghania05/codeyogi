import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import AppContainerPage from './pages/AppContainer.page';
import AuthPage from './pages/Auth.page';
import DashBoardPage from './pages/DashBoard.page';
import LoginPage from './pages/Login.page';
import NotFoundPage from './pages/NotFound.page';
import RecordingsPage from './pages/Recordings.page';
import SignUpPage from './pages/SignUp.page';

function App() {
  return (
    <BrowserRouter>
    <Switch>
      <Route path="/" exact>
        <Redirect to="/login"></Redirect> 
      </Route>
      <Route path={["/login","/signup"]} exact>
        <AuthPage></AuthPage>
      </Route>
      <Route path={["/dashboard","/recordings", "/batch/:batchNumber/lecture/:lectureNumber"]} exact>
        <AppContainerPage></AppContainerPage>
      </Route>
      <Route>
        <NotFoundPage></NotFoundPage>
      </Route>
    </Switch>
    </BrowserRouter>
  );
}

export default App;




// <Route path="/auth"> -> here this is clled common namespace. 
//Now, login will get url "/auth/login" and signup will get url "/auth/signup"
//this is a problem because if the client say to change url then it is very hectic to change everywhere.