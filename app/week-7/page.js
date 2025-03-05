"use client"
import ItemsData from "../week-6/items";
import ItemList from "../week-6/item-list";
import Form from "../week-5/form";
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

            <div className='flex inline justify-around bg-blue-100 lg:w-full m:w-1/2' >
            <h1 onClick={()=>sortBy((a,b)=> a.name.localeCompare(b.name))}  className="text-center text-xl text-white m-7 bg-green-500 lg:w-1/3 m:w-1/2 rounded-lg p-8 m-6 hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2">sort by name</h1>
            <h1 onClick={()=>sortBy((a,b)=> a.quantity - b.quantity)} className="text-center text-xl text-white m-7 bg-green-500 lg:w-1/3 m:w-1/2 rounded-lg p-8 m-6 hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2">sort by quantity</h1>
            <h1 onClick={()=>sortBy((a,b)=> a.category.localeCompare(b.category))} className="text-center text-xl text-white m-7 bg-green-500 lg:w-1/3 m:w-1/2 rounded-lg p-8 m-6 hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2">sort by category</h1>
            </div>
        </div>
    )
}