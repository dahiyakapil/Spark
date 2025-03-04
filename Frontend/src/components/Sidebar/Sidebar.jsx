import logo from "../../assets/Signup/singup_logo.png"
import links from "../../assets/pages-redirect/Links/Links-logo.png"
import appearance from "../../assets/pages-redirect/Appearence/appearence.png"
import analytics from "../../assets/pages-redirect/Analytics/analytics.png"
import settings from "../../assets/pages-redirect/Settings/Settings.png"
import "./Sidebar.css"
import { Link } from "react-router-dom"


const Sidebar = () => {
    return (
        <>
            <div className="sidebar-container">
                <div className="logo-spark">
                    <div>
                        <img src={logo} alt="" />
                    </div>
                    <div>
                        <h2>Spark</h2>
                    </div>
                </div>
                <div className="links-sections">
                    <div className="links">
                        <div><img src={links} alt="links" /></div>
                        <div>
                            <Link to
                                ="/links"><p>Links</p></Link>
                        </div>
                    </div>
                    <div className="appearance">
                        <div><img src={appearance} alt="appearance" /></div>
                        <div>
                           <Link to="/appearance"> <p>Appearance</p></Link>
                        </div>
                    </div>
                    <div className="analytics">
                        <div><img src={analytics} alt="Analytics" /></div>
                        <div>
                           <Link to="/analytics"> <p>Analytics</p></Link>
                        </div>
                    </div>
                    <div className="settings">
                        <div><img src={settings} alt="Settings" /></div>
                        <div>
                            <Link to="/settings"><p>Settings</p></Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}


export default Sidebar;