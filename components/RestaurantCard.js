import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const { restaurantData } = props;
  const { name, cloudinaryImageId, cuisines, costForTwo, avgRating } =
    restaurantData?.info;
  return (
    <div className="restaurant-card">
      <img
        className="restaurant-image"
        src={CDN_URL + cloudinaryImageId}
        alt="restaurant-img"
      />
      <h3>{name}</h3>
      <h4>{cuisines.join(",")}</h4>
      <h4>{costForTwo}</h4>
      <h5>{avgRating}⭐</h5>
    </div>
  );
};

export default RestaurantCard;
