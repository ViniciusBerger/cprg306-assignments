"use client"
import ItemsData from "../week-6/items";
import ItemList from "../week-6/item-list";
import Form from "../week-5/form";
import Sort from "../week-7/sort";
import { useState } from "react";

export default function Page(){
    const [item, setItem] = useState(ItemsData);    
    const handleAddItem = (newItem) => {
        setItem([...item, newItem]);
        }

    const sortBy = (compareType)=>{
       const sortedItems = [...item].sort(compareType);
       setItem(sortedItems);
    }

    const onDeleteItem = (id)=> {
        setItem(item.filter((item)=> item.id !== id));
    }
    
    return (

        <div>
            <Form onAddItem={handleAddItem} />
            <ItemList items={item} sortBy = {sortBy} onDeleteItem={onDeleteItem}/>
            <Sort sortBy={sortBy}/>

        </div>
    )
}