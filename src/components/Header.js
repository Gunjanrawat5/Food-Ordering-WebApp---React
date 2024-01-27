import { LOGO_URL } from "../utils/constants";
import  {useState} from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {

    const [btnReact,setBtnReact] = useState("Login")

    const onlineStatus = useOnlineStatus();
    
    return(
        <div className="flex justify-between shadow-lg">
            <div className="logo-container">
                <img 
                className="w-56"
                 src={LOGO_URL}>
                 </img>
            </div>

            <div className="flex items-center">
                <ul className="flex p-4 m-4">
                    <li className=" px-4">
                        Online Status: {onlineStatus? "✅" : "❌"  }
                    </li>
                    <li className=" px-4">
                    <Link to="/">Home</Link>
                    </li>
                    <li className=" px-4">
                    <Link to="/about">About us</Link>
                    </li>
                    <li className=" px-4">
                       <Link to="/contact">Contact Us</Link> 
                        </li>
                    <li>Cart</li>
                    <button
                     className="login px-4"
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