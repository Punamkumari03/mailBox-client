import {
  Route,

  Switch,
  Redirect
} from "react-router-dom/cjs/react-router-dom.min";
import "./App.css";
import SignUp from "./component/SignUp";
import Login from "./component/login/Login";
import Navbar from "./component/navbar/Navbar";
import ComposeMail from "./component/mail/ComposeMail";
import Inbox from "./component/mail/Inbox";
import { useSelector } from "react-redux";

function App() {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  return (
    <div>
    {/* <Navbar/> */}
     
      <Switch>
        <Route exact path="/">
          <Login />
        </Route>
        <Route path="/signup">
          <SignUp />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route exact  path="/composemail">
        {isAuthenticated && <ComposeMail/>}
        {!isAuthenticated && <Redirect to='/login'/>}
         
        </Route>
        <Route path="/inbox">
        {isAuthenticated && <Inbox/>}
        {!isAuthenticated && <Redirect to='/login'/>}
         
        </Route>
      </Switch>
    </div>
  );
}

export default App;
