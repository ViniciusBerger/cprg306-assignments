"use client";
import Item from './item';
export default function ItemList({items, onDeleteItem}) {

    
    return (
        <div className="flex flex-col items-center bg-white min-h-screen">
            <h1 className="text-center text-xl text-white m-7 bg-blue-500 lg:w-5/6 m:w-1/3 rounded-lg p-8 ">Shopping cart</h1>
            <ul className='w-full max-w-6xl px-4 flex text-black justify-around m-5 flex-wrap gap-4'>
                {items.map((item) => 
                    (<li key={item.name}>
                            <Item name={item.name} id={item.id} quantity={item.quantity} category={item.category} onDeleteItem={onDeleteItem}/>
                    </li>))}
            </ul>
        </div>
    )
}


