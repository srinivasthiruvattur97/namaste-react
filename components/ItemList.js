import { CDN_URL } from "../utils/constants";

export function ItemList({ menuItems }) {
  console.log(menuItems);
  return (
    <div className="text-left">
      {menuItems.map((item) => (
        <div
          key={item.card.info.id}
          className="flex border-b-2 border-gray-200 m-2"
        >
          <div className="w-10/12">
            <span className="mt-2">{item.card.info.name}</span>
            <span className="block py-2">
              ₹{" "}
              {item.card.info.price / 100 || item.card.info.defaultPrice / 100}
            </span>
            <p className="text-xs opacity-60 w-10/12 my-5">
              {item.card.info.description}
            </p>
          </div>
          <div className="relative">
            <img className="w-36 h-22" src={CDN_URL + item.card.info.imageId} />
            <button className="text-green-700 w-auto rounded-sm bg-white-500 shadow-md px-2 absolute">
              Add
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
