"use client"

import ItemsData from "../week-6/items";
import ItemList from "../week-6/item-list";
import Form from "../week-5/form";
import Sort from "../week-7/sort";
import { useState, } from "react";
import { MealIdeas } from "../week-8/mealIdeas";

export default function ShoppingList(){
    const [items, setItems] = useState(ItemsData);    
    const [selectedItem, setSelectedItem] = useState({id: '', name: '', quantity: 0, category: ''});
    
    const handleAddItem = (newItem) => { // handle when a new item is add to the list
        setItems([...items, newItem]);
        }

    const sortBy = (compareType)=>{ // sort items by the choosen comparison type
       const sortedItems = [...items].sort(compareType);
       setItems(sortedItems);
    }

    const onDeleteItem = (id)=> { // handle to delete item
        setItems(items.filter((item)=> item.id !== id));
    }

    const onSelectedItem = (id) => { // mark a item as an selected item for recipes purpose
        setSelectedItem(items.find((item)=> item.id === id));
    }

    const formatIngredientName = (item)=>{ // formatt the ingredient name because "item" is a name that contains emojis and spaces
        const formattedIngredient = item.split(/[,]+|[\p{Emoji}]+/gu)[0] // it will split the name from emoji or any comma in name
        return formattedIngredient 
    }
    
    return (
        <div>
            <Form className="flex" onAddItem={handleAddItem} /> {/* Form pass ahead handleAddItem function as onAddItem */}
            <div className="flex flex-col md:flex-row justify-around gap-2 items-stretch">
                
                <div className="flex-1 w-full md:w-auto h-full"> {/* these two divs work to make itemList and mealIdeas side to side */}
                    <ItemList 
                        items={items}   
                        sortBy={sortBy}   
                        onDeleteItem={onDeleteItem}
                        onSelectedItem={onSelectedItem} />
                </div>

                <div className="flex-1 w-full md:w-auto h-full"> {/* these two divs work to make itemList and mealIdeas side to side */}
                    <MealIdeas ingredient={formatIngredientName(selectedItem.name)} /> 
                </div>

            </div>
            <Sort sortBy={sortBy}/>
        </div>
    )
}