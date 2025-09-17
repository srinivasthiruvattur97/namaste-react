import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const { restaurantData } = props;
  console.log(restaurantData);
  const { name, cloudinaryImageId, cuisines, costForTwo, avgRating } =
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
