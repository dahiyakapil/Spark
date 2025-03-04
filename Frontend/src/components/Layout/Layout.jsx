import { Outlet } from "react-router-dom"; 

import Sidebar from "../Sidebar/Sidebar";
import "./Layout.css";
import '../Sidebar/Sidebar.css';
import Header from "../Header/Header";
import "../Header/Header.css"

const Layout = () => {
  return (
    <div className="container">
      <Sidebar className="sidebar" />
      <div className="main-content">
        <Header/>
        <div className="content">
          <Outlet /> 
        </div>
      </div>
    </div>
  );
};

export default Layout;