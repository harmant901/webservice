
import Login from './components/Login';
import Register from './components/Register';
import ViewUsers from './components/ViewUsers';
import {
  BrowserRouter as Router,
  Link,
  Route,
  Switch,
} from 'react-router-dom';
function App() {
  return (
    
    <div className="App">
      <h1>Welcome to Harmans List</h1>
      <Router>
      <Switch>
        <Route path='/viewusers' component={ViewUsers} exact />
        <Route path="/register" component={Register} exact />
        <Route path="/login" component={Login} exact />
      </Switch>
      
      <Link className="link" to="/register">Click me to Register</Link><br></br>
      <Link className="link" to="/login">Click me to Login</Link><br></br>
      <Link className="link" to="/viewusers">Click me to view all registered users</Link>
      
    
      </Router>
        
    </div>
  );
}

export default App;
