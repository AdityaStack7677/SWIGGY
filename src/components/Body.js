import RestaurantCard, { withPromotedLabel } from "./RestaurantCard";
import { useContext, useEffect, useRef, useState } from "react";

import { Link } from "react-router";
import Shimmer from "./Shimmer";
import UserContext from "../utils/UserContext";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
  //local State variable- Super Powerful variable
  const [listOfRestaurants, setrestaurantList] = useState([]);
  const [filteredRestaurant, setfilteredRestaurant] = useState([]);

  // const [searchText, setsearchText] = useState("");

  const searchText = useRef();

  const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);

  // Whenever a state varible update, react triggers a reconciliation cycle(re-renders the component)

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.5813646&lng=73.7321535&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    // console.log(json);

    // Optional chaining
    setrestaurantList(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setfilteredRestaurant(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  const onlineStatus = useOnlineStatus();

  if (onlineStatus === false) {
    return (
      <h1>
        Looks like you are offline!! Please check your internet connection
      </h1>
    );
  }

  const { loggedInUser, setUserName } = useContext(UserContext);

  console.log("Body Rendered");

  //conditinal rendering
  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter flex">
        <div className="search m-4 p-4">
          <input
            ref={searchText}
            data-testid="searchInput"
            className="py-1 border border-solid border-black"
          />
          <button
            className="px-4 py-1 bg-red-300 m-4 border border-solid border-pink-950 rounded-md"
            onClick={() => {
              //Filter the restaurants cards and update the UI
              //search text
              console.log(searchText.current.value);
              const searchRest = listOfRestaurants.filter((restaurant) =>
                restaurant?.info?.name
                  .toLowerCase()
                  .includes(searchText.current.value.toLowerCase())
              );
              setfilteredRestaurant(searchRest);
            }}
          >
            Search
          </button>
        </div>
        <div className="search m-4 p-4 flex items-center">
          <button
            className="px-4 py-1 bg-slate-400 m-4 rounded-lg"
            onClick={() => {
              const filteredList = listOfRestaurants.filter(
                (res) => res.info.avgRating > 4.2
              );
              setfilteredRestaurant(filteredList);
              // console.log(filteredList);
            }}
          >
            Top Rated Restaurant
          </button>
        </div>
        <div className="search m-4 p-4 flex items-center">
          <label>UserName :</label>
          <input
            className="border border-black"
            value={loggedInUser}
            onChange={(e) => setUserName(e.target.value)}
          />
        </div>
      </div>
      <div className="flex flex-wrap">
        {filteredRestaurant.map((restaurant) => (
          <Link
            key={restaurant.info.id}
            to={"/restaurants/" + restaurant.info.id}
          >
            {restaurant.info.promoted ? (
              <RestaurantCardPromoted resData={restaurant} />
            ) : (
              <RestaurantCard resData={restaurant} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
