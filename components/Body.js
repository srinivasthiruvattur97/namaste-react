import { mockData } from "../utils/mockData";
import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";

const Body = () => {
  const [restaurantList, setRestaurantList] = useState([]); //Array destructuring where arr[0] is restaurantList and arr[1] is setRestaurantList
  const [filteredResList, setFilteredResList] = useState([]);
  const [searchText, setSearchText] = useState("");

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
  if (restaurantList.length === 0) {
    return <Shimmer />;
  }

  return (
    <div className="body">
      <div className="filter-bar">
        <div className="search-bar">
          <input
            type="text"
            placeholder="Search food items..."
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
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
        <div className="top-rated-filter">
          <button
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
        </div>
        <div className="clear-filter">
          <button
            onClick={() => {
              setFilteredResList(mockData);
            }}
          >
            Clear Filter
          </button>
        </div>
      </div>
      <div className="restaurant-container">
        {filteredResList.map((restaurant) => {
          return (
            <RestaurantCard
              key={restaurant?.info?.id}
              restaurantData={restaurant}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Body;
