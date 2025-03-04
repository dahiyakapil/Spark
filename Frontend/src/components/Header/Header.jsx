import { IoShareSocialOutline } from "react-icons/io5";
import "./Header.css"


const Header = () => {
    return (
        <>
            <div className="header-container">
                <div className="username-desc">
                    <div className="username-position">
                        <div><h3>Hi, </h3></div>
                        <div><span>Jenny Wilson!</span></div>
                    </div>
                    <p>Congratulations . You got a great response today . </p>
                </div>
                <div>
                    <div>
                        <button className="share-button" >
                            <IoShareSocialOutline className="share-icon" />
                            <span>Share</span>
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Header;