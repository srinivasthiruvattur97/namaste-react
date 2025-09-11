import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { MENU_URL } from "../utils/constants";
import { useParams } from "react-router-dom";

const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState(null);
  const { resId } = useParams();
  console.log(resId);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    console.log(MENU_URL);
    console.log(resId);
    const data = await fetch(MENU_URL + resId);

    const json = await data.json();
    setResInfo(json);
  };

  if (resInfo === null) return <Shimmer />;

  console.log(resInfo);
  const { name, cuisines, costForTwoMessage } =
    resInfo.data?.cards[2]?.card?.card?.info;
  const resMenu =
    resInfo.data.cards[4].groupedCard.cardGroupMap.REGULAR.cards[4].card.card
      .itemCards;
  return (
    <div className="res-menu">
      <h1>{name}</h1>
      <p>
        {cuisines} - {costForTwoMessage}
      </p>
      <h2>Menu</h2>
      <ul>
        {resMenu.map((item) => (
          <li key={item.card.info.id}>
            {item.card.info.name}- Rs{" "}
            {item.card.info.price / 100 || item.card.info.defaultPrice / 100}
          </li>
        ))}
      </ul>
    </div>
  );
};
export default RestaurantMenu;
