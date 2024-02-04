import { LOGO_URL } from "../utils/constants";
import  {useState, useContext} from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {

    const [btnReact,setBtnReact] = useState("Login")

    const onlineStatus = useOnlineStatus();

    const {loggedInUser} = useContext(UserContext);

    const cartItems = useSelector((store) => store.cart.items)
    
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
                    <li className="px-4 font-bold text-xl">
                       Cart ({cartItems.length} items)
                    </li>
                    <li className="px-4">{loggedInUser}</li>
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