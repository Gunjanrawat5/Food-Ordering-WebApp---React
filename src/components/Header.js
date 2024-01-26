import { LOGO_URL } from "../utils/constants";
import  {useState} from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {

    const [btnReact,setBtnReact] = useState("Login")

    const onlineStatus = useOnlineStatus();
    
    return(
        <div className="header">
            <div className="logo-container">
                <img 
                className="logo"
                 src={LOGO_URL}>

                 </img>
            </div>
            <div className="nav-items">
                <ul>
                    <li>
                        Online Status: {onlineStatus? "✅" : "❌"  }
                    </li>
                    <li>
                    <Link to="/">Home</Link>
                    </li>
                    <li>
                    <Link to="/about">About us</Link>
                    </li>
                    <li>
                       <Link to="/contact">Contact Us</Link> 
                        </li>
                    <li>Cart</li>
                    <button
                     className="login"
                     onClick={()=>{
                        btnReact === "Login"
                        ?setBtnReact("Logout")
                        :setBtnReact("Login")
                     }}
                     >
                        {btnReact}</button>
                </ul>
            </div>
        </div>
    )
}

export default Header;