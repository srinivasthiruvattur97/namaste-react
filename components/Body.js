import { mockData } from "../utils/mockData";
import RestaurantCard from "./RestaurantCard";

const Body = () => {
  return (
    <div className="body">
      <div className="search-bar">
        <input type="text" placeholder="Search food items..." />
        <button>Search</button>
      </div>
      <div className="restaurant-container">
        {mockData.map((restaurant) => {
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
