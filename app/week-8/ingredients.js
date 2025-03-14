"use client"

import {useState, useEffect} from "react"

const fetchFullMeal = async(mealId) => { // fetchs the api and return a full meal based on the id
    const response = await fetch (`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`)
    const data = await response.json();
    return data.meals[0];    //get the first meal returned by the api
}

export default function Ingredients(mealId) {
    
    const [fullMeal, setFullMeal] = useState(null) // full meal
    const [ingredients, setIngredients] = useState([]) // ingredients list

    const loadFullMeal = async(mealId) => {
        console.log(mealId)
        const meal = await fetchFullMeal(mealId); // load the data from the api promise
        setFullMeal(meal)
    }

    useEffect ( () => { // run the loadFullMeal function
        loadFullMeal(mealId)
    },[])

    useEffect (() => { 
        if (fullMeal) { // if there's a full meal
            let ingredientsList = [] // it creates an empty array
            
            for (let i = 1; i<=20; i++) { // for i until 20 because there are 20 differente strIngredients returned from api
                const ingredient = fullMeal[`strIngredient${i}`] // for each strIngredient
                    if (ingredient) { // if its not null or empty
                        ingredientsList.push(ingredient) // add the ingredient to the ingredient list
                    }
            }
        setIngredients(ingredientsList) //set ingredients as the ingredient list (contains all ingredients that are not null)
    }}, [fullMeal]) // it will run everytime that fullMeal is modified


    return (
        
        <div>
            {ingredients.map((ingredient) =>{ return <p>{ingredient}</p>})}
        </div>
    )
}

