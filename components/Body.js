import { mockData } from "../utils/mockData";
import RestaurantCard, { withVegLabel } from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
  const [restaurantList, setRestaurantList] = useState([]); //Array destructuring where arr[0] is restaurantList and arr[1] is setRestaurantList
  const [filteredResList, setFilteredResList] = useState([]);
  const [searchText, setSearchText] = useState("");
  const onlineStatus = useOnlineStatus();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9352403&lng=77.624532&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    console.log(json);
    const liveData =
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants;
    setRestaurantList(liveData);
    setFilteredResList(liveData);
  };
  console.log(restaurantList);

  if (!onlineStatus) {
    return <h1>You are Offline!!!! Please check your internet connection</h1>;
  }

  const VegRestaurantCard = withVegLabel(RestaurantCard);

  return !restaurantList.length ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="flex">
        <div className=" m-2 p-2 flex items-center">
          <input
            className="mx-1 border border-solid border-black"
            type="text"
            placeholder="Search food items..."
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            className="bg-green-300 px-2 rounded-lg dark:md:hover:bg-green-900"
            onClick={() => {
              console.log(restaurantList);
              const filteredList = restaurantList.filter((res) => {
                return res.info.name
                  .toLowerCase()
                  .includes(searchText.toLowerCase());
              });
              setFilteredResList(filteredList);
            }}
          >
            Search
          </button>
        </div>
        <div className="flex items-center mx-2">
          <button
            className="bg-blue-400 px-2 mx-4 rounded-lg"
            onClick={() => {
              console.log(restaurantList);
              const filteredList = restaurantList.filter((res) => {
                return res?.info?.avgRating > 4.3;
              });
              console.log(filteredList);
              setFilteredResList(filteredList);
            }}
          >
            Top Rated Restaurants
          </button>
          <button
            className="bg-red-400 px-2 mx-4 rounded-lg"
            onClick={() => {
              setFilteredResList(mockData);
            }}
          >
            Clear Filter
          </button>
        </div>
      </div>
      <div className="flex flex-wrap">
        {filteredResList.map((restaurant) => {
          return (
            <Link
              key={restaurant?.info?.id}
              to={"/restaurants/" + restaurant?.info?.id}
            >
              {restaurant?.info?.isOpen ? (
                <VegRestaurantCard restaurantData={restaurant} />
              ) : (
                <RestaurantCard restaurantData={restaurant} />
              )}
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Body;
