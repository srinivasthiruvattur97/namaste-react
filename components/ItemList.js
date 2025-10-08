import { useDispatch } from "react-redux";
import { CDN_URL, IMAGE_NOT_AVAILABLE } from "../utils/constants";
import { addItem, removeItem } from "../utils/store/CartSlice";

export function ItemList({ menuItems }) {
  const dispatch = useDispatch();

  const handleAddItem = (item) => {
    dispatch(addItem(item));
  };

  return (
    <div className="text-left">
      {menuItems.map((item) => {
        const id = item.card.info.id;
        return (
          <div key={id} className="flex border-b-2 border-gray-200 m-3 py-6">
            <div className="w-10/12">
              <span className="mt-2">{item.card.info.name}</span>
              <span className="block py-2">
                ₹{" "}
                {item.card.info.price / 100 ||
                  item.card.info.defaultPrice / 100}
              </span>
              <p className="text-xs opacity-60 w-10/12 my-5">
                {item.card.info.description}
              </p>
            </div>
            <div className="relative">
              <img
                className="w-36 h-22"
                src={
                  item.card.info.imageId
                    ? CDN_URL + item.card.info.imageId
                    : IMAGE_NOT_AVAILABLE
                }
              />
              <button
                onClick={() => handleAddItem(item)}
                className="text-green-700 w-auto rounded-sm bg-white-500 shadow-md px-2 absolute"
              >
                Add +
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
}
