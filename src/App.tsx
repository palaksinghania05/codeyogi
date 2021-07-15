import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import DashBoardPage from './pages/DashBoard.page';
import LoginPage from './pages/Login.page';
import RecordingsPage from './pages/Recordings.page';
import SignUpPage from './pages/SignUp.page';

function App() {
  return (
    <BrowserRouter>
    <Switch>
      <Route path="/" exact>
        <Redirect to="/login"></Redirect> 
      </Route>
      <Route path="/login">
        <LoginPage></LoginPage>
      </Route>
      <Route path="/signup">
        <SignUpPage></SignUpPage>
      </Route>
      <Route path="/dashboard">
        <DashBoardPage></DashBoardPage>
      </Route>
      <Route path="/recordings">
        <RecordingsPage></RecordingsPage>
      </Route>
    </Switch>
    </BrowserRouter>
  );
}

export default App;
