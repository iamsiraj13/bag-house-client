
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import AuthProvider from './Context/AuthProvider/AuthProvider';
import Dashboard from './Pages/Dashboard/Dashboard/Dashboard';
import Explore from './Pages/Explore/Explore/Explore';
import Home from './Pages/HomePage/Home/Home';
import Purchase from './Pages/HomePage/Purchase/Purchase';
import PrivateRoute from './Pages/PrivateRoute/PrivateRoute';
import Login from './Pages/Shared/Login/Login';
import Registration from './Pages/Shared/Registration/Registration';

function App() {
  return (
    <AuthProvider>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/dashboard">
            <Dashboard></Dashboard>
          </Route>
          <PrivateRoute path="/purchase/:purchaseId">
            <Purchase></Purchase>
          </PrivateRoute>
          <Route path="/explore">
            <Explore></Explore>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route path="/registration">
            <Registration></Registration>
          </Route>
        </Switch>
      </Router>
    </AuthProvider>
  );
}

export default App;
