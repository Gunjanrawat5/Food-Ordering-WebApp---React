import { useEffect, useState } from "react";
import { menuAPI } from "./constants";

const useRestaurantMenu  = (resId) =>{
    
    const [resInfo, setResInfo] = useState(null)
    //fetch data
    useEffect(()=>{
        fetchData();
    },[])

    const fetchData = async() => {
        const data = await fetch(menuAPI + resId);
        const json = await data.json();
        setResInfo(json.data)
    }


    return resInfo;
}

export default useRestaurantMenu;