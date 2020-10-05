import {  
  BrowserRouter as Router,
  Switch,
  Route, useLocation, withRouter } from 'react-router-dom';
import React, { createContext, useEffect, useState } from 'react';
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
import TopMenu from './Components/TopMenu/TopMenu';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import './App.css';
import AddEvent from './Components/Events/AddEvent';
import RegisterUserEvent from './Components/UserEvents/RegisterUserEvent';
import UserEventList from './Components/UserEvents/UserEventList';
import AdminHome from './Components/Admin/AdminHome';
import ScrollToTop from './Components/Utilities/ScrollToTop';

export const UserContext = createContext();
function App() {
  const [loggedInUser, setLoggedInUser] = useState({});

  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>    
      <Router>  
      <ScrollToTop/>
         <TopMenu></TopMenu>         
            <Switch>
              <Route path="/home">
                <Home />
              </Route>
              <Route path="/adminHome">
                <AdminHome />
              </Route>
              
              <Route path="/login">
                <Login />
              </Route>
              <Route path="/addEvent">
                <AddEvent />
              </Route>            
               <PrivateRoute path="/RegisterUserEvent/:title">
                 <RegisterUserEvent />
              </PrivateRoute>   
              <PrivateRoute path="/userEventList">
                <UserEventList />
              </PrivateRoute>            
              <Route exact path="/">
                <Home />
              </Route>
            </Switch>
        </Router>    
      </UserContext.Provider>

  
  );
}

export default App;
