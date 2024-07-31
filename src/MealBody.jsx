

const MealBody = ({ itemsList }) => {
  return (
    <div>
      <h2 className="text-center font-bold mt-2 text-3xl md:text-4xl">
        QuickBites! 😉
      </h2>
      <div className="p-4 m-3 grid sm:grid-cols-2  md:grid-cols-3 lg:grid-cols-4 gap-3">
        {itemsList}
      </div>
    </div>
  );
};

export default MealBody