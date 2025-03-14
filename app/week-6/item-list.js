"use client";
import Item from './item';
export default function ItemList({items, onSelectedItem, onDeleteItem}) {

    
    return (
        <div>
            <h1 className="text-center text-xl text-white ml-16 m-7 bg-blue-500 lg:w-5/6 m:w-1/3 rounded-lg p-8">Shopping cart</h1>

            <div>
            <ul className='w-full max-w-6xl px-4 flex text-black justify-around m-5 ml-1 flex-wrap gap-4'>
                {items.map((item) => 
                    (<li onClick={()=>onSelectedItem(item.id)} key={item.name}>
                            <Item 
                                name={item.name} 
                                onclick={()=>{}} 
                                id={item.id} 
                                quantity={item.quantity} 
                                category={item.category} 
                                onDeleteItem={onDeleteItem}
                                onSelectedItem={onSelectedItem}/>
                    </li>))}
            </ul>
            </div>
        </div>
    )
}


