//@misikirayu

import axios from "axios";
import { useEffect, useState } from "react";
import MealBody from "./MealBody";


const Meal = () => {
  const [items, setItems] = useState([]);
  useEffect(() => {
    axios
      .get("https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood")
      .then((res) => {
        setItems(res.data.meals);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const itemsList = items.map(({ strMeal, strMealThumb, idMeal }) => {
    return (
      <section
        key={idMeal}
        className="border p-3 shadow-md flex flex-col justify-center "
      >
        <img src={strMealThumb} alt="" className="h-40" />
        <section>
          <p className="text-xl ">{strMeal}</p>
          <p className="text-sm font-serif">#{idMeal}</p>
        </section>
      </section>
    );
  });

  return (
    <MealBody itemsList={itemsList}/>
  );
};

export default Meal;
