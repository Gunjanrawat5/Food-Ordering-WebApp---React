import { useEffect, useState} from "react"
import Shimmer from "./Shimmer"
import { useParams } from "react-router-dom"
import { menuAPI } from "../utils/constants"

const RestaurantMenu = () => {

    const [resInfo,setResInfo] = useState(null)

    const {resId} = useParams()

    useEffect(()=>{
        fetchMenu()
    },[])

    const fetchMenu = async () => {
        const data = await fetch(menuAPI+resId)
        console.log(menuAPI+resId)
        const json = await data.json();
        //console.log(json)
        setResInfo(json.data)
    }

    if (resInfo === null || !resInfo.cards) return <Shimmer />;

    const {name, cuisines , costForTwoMessage } = resInfo?.cards[0]?.card?.card?.info;

    const {itemCards} = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card || {}
    //console.log(itemCards)

    return (
    <div>
        <h1>{name}</h1>
        <h3>{cuisines.join(", ")} - {costForTwoMessage} </h3>
        <h2>Menu</h2>
        <ul>
            {itemCards.map(item =>
                 (<li key={item.card.info.id}>{item.card.info.name} - Rs {item.card.info.price/100}</li>))}
        </ul>
    </div>
  )
}

export default RestaurantMenu