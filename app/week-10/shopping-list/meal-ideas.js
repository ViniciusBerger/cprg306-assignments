"use client";

import { useState, useEffect } from "react";

async function fetchMealIdeas(ingredient) {
  const response = await fetch(
    `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`
  );
  const data = await response.json();
  return data.meals;
}
export default function MealIdeas({ ingredient }) {
  const [meals, setMeals] = useState([]); //meals is the array of available meals the API will retrieve - initialized as empty array
  console.log("Ingredient: ", ingredient);
  const loadMealIdeas = async () => {
    const meals = await fetchMealIdeas(ingredient);
    setMeals(meals);
  };

  useEffect(() => {
    // Why do I have an error if I don't have ingredient twice here?
    loadMealIdeas(ingredient);
  }, [ingredient]);

  return (
    <div className="p-4 max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">Meal Ideas</h2>
      {ingredient ? (
        <>
          <p className="mb-2">Based on: {ingredient}</p>
          {meals && meals.length > 0 ? (
            <ul className="space-y-4">
              {meals.map((meal) => (
                <li
                  key={meal.idMeal}
                  className="bg-gray-400 p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow"
                >
                  <p className="text-l font-semibold">{meal.strMeal}</p>
                </li>
              ))}
            </ul>
          ) : (
            <p>No meals available for this ingredient yet.</p>
          )}
        </>
      ) : (
        <p className="text-gray-600">
          Select an ingredient to load available meal ideas.
        </p>
      )}
    </div>
  );
}
