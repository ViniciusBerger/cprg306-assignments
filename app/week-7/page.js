"use client"
import ItemsData from "../week-6/items";
import ItemList from "../week-6/item-list";
import Form from "../week-5/form";
import Sort from "./sort";
import { useState, useEffect } from "react";

export default function Page(){
    const [items, setItems] = useState(ItemsData);    
    const [selectedItem, setSelectedItem] = useState({id: '', name: '', quantity: 0, category: ''});
    
    const handleAddItem = (newItem) => {
        setItems([...items, newItem]);
        }

    const sortBy = (compareType)=>{
       const sortedItems = [...items].sort(compareType);
       setItems(sortedItems);
    }

    const onDeleteItem = (id)=> {
        setItems(items.filter((item)=> item.id !== id));
    }

    const onSelectedItem = (id) => {
        setSelectedItem(items.find((item)=> item.id === id));
    }

    const formatIngredientName = (item)=>{
        const formattedIngredient = item.split(/[,]+|[\p{Emoji}]+/gu)[0]
        return formattedIngredient
    }

    useEffect(() => {
        if (selectedItem){
            console.log(formatIngredientName(selectedItem.name));
        }
    })
    
    return (

        <div>
            <Form onAddItem={handleAddItem} />
            <ItemList items={items} sortBy = {sortBy} onDeleteItem={onDeleteItem} onSelectedItem={onSelectedItem}/>
            <Sort sortBy={sortBy}/>

        </div>
    )
}