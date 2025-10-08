import { ItemList } from "./ItemList";
import { useState } from "react";

const MenuCategories = ({ category, showItems, setShowIndex, index }) => {
  const onClicked = () => {
    if (showItems) {
      setShowIndex(null); // collapse if already open
    } else {
      setShowIndex(index); // open this one
    }
  };
  console.log(category);
  const menuItems = category.card.card.itemCards;
  return (
    <div>
      <div className="w-6/12 mx-auto my-5 shadow-lg bg-gray-100 cursor-pointer">
        <div
          className="flex justify-between hover:bg-gray-200"
          onClick={() => {
            onClicked();
          }}
        >
          <span className="font-bold py-3">
            {category.card.card.title} - ({category.card.card.itemCards.length})
          </span>
          {showItems ? <span>⬆️</span> : <span>⬇️</span>}
        </div>
        {showItems && <ItemList menuItems={menuItems} />}
      </div>
    </div>
  );
};

export default MenuCategories;
