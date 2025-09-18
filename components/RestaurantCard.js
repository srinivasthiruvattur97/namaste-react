import { CDN_URL } from "../utils/constants";
import { VEG_SVG } from "../utils/constants";

const RestaurantCard = (props) => {
  const { restaurantData } = props;
  console.log(restaurantData);
  const { veg, name, cloudinaryImageId, cuisines, costForTwo, avgRating } =
    restaurantData?.info;

  return (
    <div className="m-4 p-4 w-[230px] h-[390px] bg-blue-200 rounded-lg hover:bg-gray-400">
      <img
        className=""
        src={CDN_URL + cloudinaryImageId}
        alt="restaurant-img"
      />
      <h3 className="font-bold">{name}</h3>
      <h4>{cuisines.join(",")}</h4>
      <h4>{costForTwo}</h4>
      <h5>{avgRating}⭐</h5>
    </div>
  );
};

export default RestaurantCard;

export const withVegLabel = (RestaurantCard) => {
  return (props) => {
    return (
      <div className="relative">
        <img
          className="w-8 absolute bottom-2 right-4 h-8"
          src={VEG_SVG}
          alt="veg-svg"
        />
        <RestaurantCard {...props} />
      </div>
    );
  };
};
