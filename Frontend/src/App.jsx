
// import './App.css'
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Home from './pages/Landing_Page/Home'
// import Signup from './pages/Signup/Signup'
// import Signin from './pages/Signin/Signin';
// import LinktreeUser from './pages/LinktreeUsername/LinktreeUsername';

// import Sidebar from './components/Sidebar/Sidebar';
// import Analytics from './pages/Analytics/Analytics';
// import Appearance from './pages/Appearance/Appearance';
// import Settings from './pages/Settings/Settings';
// import Header from './components/Header/Header';
// import Layout from './components/Layout/Layout';
// import LivePreview from './components/LivePreview/LivePreview';
// import Links from './pages/Links/Links';


// function App() {
  

//   return (
//     <>
//     <Router>
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/signup" element={<Signup />} />
//         <Route path="/signin" element={<Signin />} />
//         <Route path="/linktree-user" element={<LinktreeUser />} />
   
//         <Route path="/links" element={<Links />} />
//         <Route path="/appearance" element={<Appearance />} />
//         <Route path="/analytics" element={<Analytics />} />
//         <Route path="/settings" element={<Settings />} />
      
        
//         <Route path="/layout" element={<Layout />} />
//         <Route path="/header" element={<Header />} />
        





        




//       </Routes>
//     </Router>
//     </>
//   )
// }

// export default App


import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Home from "./pages/Landing_Page/Home";
import Signup from "./pages/Signup/Signup";
import Signin from "./pages/Signin/Signin";
import LinktreeUser from "./pages/LinktreeUsername/LinktreeUsername";
import Analytics from "./pages/Analytics/Analytics";
import Appearance from "./pages/Appearance/Appearance";
import Settings from "./pages/Settings/Settings";
import Links from "./pages/Links/Links";
import ProtectedRoute from "./pages/ProtectedRoute/ProtectedRoute";
import Layout from "./components/Layout/Layout"; // Import Layout

function App() {
  return (
    <>
      <Router>
        <ToastContainer position="top-right" autoClose={3000} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/linktree-user" element={<LinktreeUser />} />

          {/* Protected Routes Inside Layout */}
          <Route element={<ProtectedRoute />}>
            <Route element={<Layout />}>
              <Route path="/links" element={<Links />} />
              <Route path="/appearance" element={<Appearance />} />
              <Route path="/analytics" element={<Analytics />} />
              <Route path="/settings" element={<Settings />} />
              <Route path="/layout" element={<Layout />} /> {/* Now Protected */}
            </Route>
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
