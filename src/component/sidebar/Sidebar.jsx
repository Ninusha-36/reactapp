import React from 'react'
import './sidebar.css'
import { HomeWorkRounded, Group , AddShoppingCart , PersonAddAlt , ShoppingCartCheckout } from '@mui/icons-material';
import {  Link } from "react-router-dom";

  

export default function Sidebar() {
    return (
        <div className="sidebar">
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Dashboard</h3>
          <ul className="sidebarList">
          
            <li className="sidebarListItem">
            <Link to="/">
              <HomeWorkRounded className="sidebarIcon" />              
              Home
              </Link>
            </li>
           
            
          </ul>
        </div>
       
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Users</h3>
          <ul className="sidebarList">
          <li className="sidebarListItem">
            <Link  to="/users">
            <Group className="sidebarIcon" />
              User List
              </Link>
            </li>
            
            <li className="sidebarListItem">
            <Link  to="/newuser">
              <PersonAddAlt className="sidebarIcon" />
              Create User
              </Link>
            </li>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Products</h3>
          <ul className="sidebarList">
          <li className="sidebarListItem">
            <Link  to="/products">
            <ShoppingCartCheckout className="sidebarIcon" />
             
              Product List
              </Link>
            </li>
            
            <li className="sidebarListItem">
            <Link  to="/newproduct">
              <AddShoppingCart className="sidebarIcon" />
              Create Product
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
    )
}
