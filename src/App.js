
import { Route, Router, Switch } from 'react-router-dom/cjs/react-router-dom.min';
import './App.css';
import SignUp from './component/SignUp';
import Login from './component/login/Login';

function App() {
  return (
  <div>
  <Switch>
  <Route exact path='/'>
  <Login/>
  </Route>
  <Route path='/signup'>
    <SignUp/>
  </Route>
  <Route path='/login'>
    <Login/>
  </Route>
    
    </Switch>
  </div>
  );
}

export default App;
