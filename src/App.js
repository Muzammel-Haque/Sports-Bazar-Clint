import "./App.css";
import React, { createContext, useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link, useHistory } from "react-router-dom";
import Home from "./Components/Home/Home";
import Event from "./Components/Event/Event";
import "bootstrap/dist/css/bootstrap.min.css";
import CheckOut from "./Components/CheckOut/CheckOut";
import Order from "./Components/Order/Order";
import { Button, Navbar, Form, FormControl, Nav } from "react-bootstrap";
import PrivateRoute from "./Components/PrivateRoute/PrivateRoute";
import Login from "./Components/Login/Login";
import Sidebar from "./Components/sidevar/Sidebar";

export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <div>
          <Navbar bg="dark" variant="dark">
            <Navbar.Brand
              style={{ color: "tomato", fontSize: "30px", fontWeight: "bold" }}
              href="/home"
            >
              Sports Bazar
            </Navbar.Brand>
            <Nav
              style={{
                marginLeft: "750px",
                fontWeight: "bold",
                fontSize: "17px",
              }}
              className="mr-auto"
            >
              <Link style={{color:'white', textDecoration:'none', marginTop:'5px', marginRight:'10px'}} to="/home">Home</Link>
              <Link style={{color:'white', textDecoration:'none', marginTop:'5px', marginRight:'10px'}} to="/order">Order</Link>
              <Link style={{color:'white', textDecoration:'none', marginTop:'5px', marginRight:'10px'}} to="/sidebar">Admin</Link>
              <Link style={{color:'white', textDecoration:'none', marginTop:'5px', marginRight:'10px'}} to="/login">Deals</Link>
              <Link style={{color:'white', textDecoration:'none', marginTop:'5px', marginRight:'10px'}} style={{backgroundColor:'tomato',marginLeft:'20px', padding:'5px', borderRadius:'3px', textDecoration:'none'}} to="/login">Login</Link>
            </Nav>
          </Navbar>
          <Switch>
            <Route path="/home">
              <Home />
            </Route>
            <Route path="/event">
              <Event />
            </Route>
            <PrivateRoute path="/checkout/:id">
              <CheckOut />
            </PrivateRoute>
            <PrivateRoute path="/order">
              <Order />
            </PrivateRoute>
            <Route path="/login">
              <Login />
            </Route>
            <PrivateRoute path="/sidebar">
              <Sidebar />
            </PrivateRoute>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </div>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
