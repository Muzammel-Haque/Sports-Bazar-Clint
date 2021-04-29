import React from 'react';
import AddProduct from '../AddProduct/AddProduct';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import ManageProduct from '../MangeProduct/ManageProduct';
import './Sidebar.css'
import manageLogo from '../icons/grid 1.png'
import editLogo from '../icons/edit 1.png'
import addLogo from '../icons/plus 1.png'


const Sidebar = () => {
    return (
        <Router>
            <div style={{display:'flex'}}>
            <div style={{height:'600px', width:'200px', backgroundColor:'tomato', padding:'15px'}}>
                <h3 style={{color:'black'}}>Sports Bazar</h3>
                <div style={{display:'flex', marginTop:'50px'}}>
                    <img style={{width:'30px'}} src={manageLogo} alt=""/>
                    <Link style={{ textDecoration:'none', }} to="/manageProduct"><h6 style={{color:'black', marginLeft:'10px'}}>Manage Product</h6></Link>
                </div>
                <div style={{display:'flex', marginTop:'20px'}}>
                    <img style={{width:'30px'}} src={addLogo} alt=""/>
                    <Link style={{ textDecoration:'none', }} to="/addProduct"><h6 style={{color:'black', marginLeft:'10px'}}>Add Product</h6></Link>
                </div>
                <div style={{display:'flex', marginTop:'20px'}}>
                    <img style={{width:'30px'}} src={editLogo} alt=""/>
                    <h6 style={{ marginLeft:'10px'}}>Edit Product</h6>
                </div>
            </div>
            <div className="second-div" display={{height:'600px'}}>
                <Switch>
                    <Route path="/addProduct">
                        <AddProduct />
                    </Route>
                    <Route path="/manageProduct">
                        <ManageProduct />
                    </Route>
                    <Route path="/">
                        <ManageProduct />
                    </Route>
                </Switch>
            </div>
        </div>
        </Router>
        
    );
};

export default Sidebar;