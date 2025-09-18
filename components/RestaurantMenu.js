import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import MenuCategories from "./MenuCategories";

const RestaurantMenu = () => {
  const { resId } = useParams();

  const resInfo = useRestaurantMenu(resId);

  if (resInfo === null) return <Shimmer />;

  const { name, cuisines, costForTwoMessage } =
    resInfo?.data?.cards[2]?.card?.card?.info;
  const resMenu =
    resInfo.data.cards[4].groupedCard.cardGroupMap.REGULAR.cards.filter(
      (card) =>
        card.card.card["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  console.log(resMenu);

  return (
    <div className="text-center">
      <h1 className="text-2xl font-bold my-3">{name}</h1>
      <p className="text-md">
        {cuisines} - {costForTwoMessage}
      </p>
      {resMenu.map((category) => {
        return (
          <MenuCategories key={category.card.card.title} category={category} />
        );
      })}
    </div>
  );
};
export default RestaurantMenu;
