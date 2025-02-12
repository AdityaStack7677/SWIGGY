import ItemList from "./ItemList";

const RestaurantCategory = ({ data, showItems, setShowIndex }) => {
  console.log(data);
  const handleClick = () => {
    setShowIndex();
  };

  return (
    <div>
      {/* Accordion Header */}
      <div className="w-6/12 mx-auto my-4 bg-gray-100 shadow-lg p-4">
        <div
          className="flex justify-between cursor-pointer"
          onClick={handleClick}
        >
          <span className="font-serif font-semibold">
            {data.title} ({data.itemCards.length})
          </span>
          <span>⬇</span>
        </div>
        {/*Accordion body */}
        {showItems && <ItemList items={data.itemCards} />}
      </div>
    </div>
  );
};

export default RestaurantCategory;
