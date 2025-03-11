"use client"
import ItemList from "./item-list";
import ItemsData from "./items.json";
import { useState } from "react";
export default function Page() {
    
    const [item, setItem] = useState(ItemsData);

    const onDeleteItem = (id)=> {
        setItem(item.filter((item)=> item.id !== id));
    }

    return (
        <div>
            <ItemList items={item} onDeleteItem={onDeleteItem}/>
        </div>
    );
}