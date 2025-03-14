"use client"
import { useState, useEffect} from "react";


const fetchMeal = async (ingredient = "chicken breasts") => { // fetch the endpoint in the API which brings  strMealThumb, strMeal and idMeal
    const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient.replace(" ", "+")}`); 
    const data = await response.json();
    return data.meals;
}

const fetchFullMeal = async(mealId) => { // fetchs the api and return a full meal based on the id
    const response = await fetch (`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`)
    const data = await response.json();
    return data.meals[0];    //get the first meal returned by the api
}


export const MealIdeas = ({ingredient}) => {

    const [meals, setMeal] = useState([]);
    const [mealId, setMealId] = useState(null)
    const [ingredients, setIngredients] = useState([])
    const [fullMeal, setFullMeal] = useState([])

    const loadMeal = async (ingredient) => { // will load the promise and set meals as the data when the promise get fullfiled
        const meals = await fetchMeal(ingredient); // it will wait till fetchMeal fullfill the promise
        setMeal(meals);
    }

    const loadFullMeal = async() => {
        const meal = await fetchFullMeal(mealId); // load the data from the api promise
        setFullMeal(meal)
    }

    useEffect(() => { // it will call loadMeal everytime that ingredient changes, thats why it receives ingredient as dependencie
        loadMeal(ingredient);
    },[ingredient])


    useEffect (() => { 
        loadFullMeal();
        if (fullMeal) { // if there's a full meal
            let ingredientsList = [] // it creates an empty array
            
            for (let i = 1; i<=20; i++) { // for i until 20 because there are 20 differente strIngredients returned from api
                const ingredient = fullMeal[`strIngredient${i}`] // for each strIngredient
                    if (ingredient) { // if its not null or empty
                        ingredientsList.push(ingredient) // add the ingredient to the ingredient list
                    }
            }
        setIngredients(ingredientsList) //set ingredients as the ingredient list (contains all ingredients that are not null)
    }}, [mealId])



    return (
        <div className="max-h-3/4">
            <h1 className="text-center text-xl text-white ml-16 m-7 bg-blue-500 lg:w-5/6 m:w-1/3 rounded-lg p-8">Meal Ideas</h1>
            
            <div className="shadow-lg bg-gray-100 p-10 sm:m-auto text-center lg:mt-20 mb-20 rounded-lg shadow-md w-full max-w-lg">
                <p className="text-center text-lg text-white mb-2 mt-1 bg-blue-500 lg:w-full m:w-1/2 rounded-lg p-4">Recipes with {ingredient}</p>
                <ul className="flex flex-col gap-2 lg:w-full max-h-[30rem] overflow-y-auto">
                
                {!meals ? <div className="text-black text-lg mt-8">There is no recipe with this ingredient</div> 
                        : meals.slice(0, 10).map((meal) => { 
                           
                    return (
                        <li onClick={() => setMealId(mealId === meal.idMeal ? null : meal.idMeal)} className="flex flex-col items-center p-2 border-2 hover:bg-blue-300 rounded-lg" key={meal.idMeal}>
                            <div className="flex items-center w-full">
                                <img className="max-h-16 max-w-16 mt-5 mb-5 ml-2 flex-shrink-0" src={meal.strMealThumb} alt="meal thumb" />
                                <p className="ml-4 flex-grow text-left">{meal.strMeal}</p>
                            </div>

                            {mealId === meal.idMeal && (
                                <div className="mt-2 flex flex-col items-center w-full">
                                    {ingredients.map((ingredient, index) => (
                                        <p key={index} className="border p-1 rounded-lg mb-1 w-full text-center">{ingredient}</p>
                                    ))}
                                </div>
                            )}
                        </li>
                    )
                        
                })}
                </ul>
            </div>
        </div>
    )
}