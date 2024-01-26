import RestaurantCard from "./RestaurantCard"
import resList from "../utils/mockData"
import {useEffect, useState} from "react"
import Shimmer from "./Shimmer"
import { Link } from "react-router-dom"
import useOnlineStatus from "../utils/useOnlineStatus"


const Body = () => {

    //State Variable
    const [listOfRestaurants,setListOfRestaurant] =useState([]);
    const [filteredRestaurant, setFilteredRestaurant] = useState([]);
    const [searchText, setSearchText] = useState("")

    useEffect(()=>{
        fetchData()
    },[]);

    const fetchData = async () => {
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")

        const json = await data.json();

        //Optional Chaining
        // console.log(json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants);
        setListOfRestaurant(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
        setFilteredRestaurant(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    }

    const onlineStatus = useOnlineStatus();
    if(onlineStatus === false){
        return <h1>Looks like you are offline , please check your connection!</h1>
    }

    //Conditional Rendering
    if(listOfRestaurants.length === 0){
        return <Shimmer/>
    }

    return(
        <div className="body">
            <div className="filter">
                <div className="search">
                    <input
                     type="text"
                      className="search-box"
                       value={searchText}
                       onChange={(e)=>{
                        setSearchText(e.target.value)
                       }}
                       >
                       </input>
                    <button onClick={()=>{
                        //Filter the res cards and update the UI
                        //seearchText
                        const filteredRestaurant = listOfRestaurants.filter((res)=>
                            res.info.name.toLowerCase().includes(searchText.toLowerCase())
                        )
                        setFilteredRestaurant(filteredRestaurant)
                    }}
                    >Search</button>
                </div>
                <button
                 className="filter-btn"
                  onClick={()=>{
                    const filteredList = listOfRestaurants.filter(
                        (res)=>res.info.avgRating>4.3
                        )
                        setListOfRestaurant(filteredList);
                    }}
                    >
                    Top Rated Restaurants
                    </button>
            </div>
            <div className="res-container">
               {/* <RestaurantCard resData={resList[8]}/> */}
               {
                filteredRestaurant.map((restaurant) => (
                <Link
                 to={"/restaurants/"+restaurant.info.id}
                 key={restaurant.info.id}
                 ><RestaurantCard  resData= {restaurant}/> </Link>
                ))}
            </div>
        </div>
    )
}

export default Body