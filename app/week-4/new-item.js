"use client"
import {useState} from 'react'
export default function newItem()
{
    let [quantity, setQuantity] = useState(1)

    function increment(){
         setQuantity(quantity + 1)
    }

    function decrement(){
        setQuantity(quantity - 1)
    }
    return (
        <div className='p-2 m-4 bg-white text-white w-36'>
            <div className='flex justify-between'>
                <span className='text-black'>{quantity}</span>
                <div className='flex'>
                <button onClick={decrement} type="button" className="w-8 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 disabled:bg-gray-400 focus:ring-blue-400 focus:ring-opacity-75">-</button>
                <button onClick={increment} type="button" className="w-8 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400  disabled:bg-gray-400 focus:ring-opacity-75 ml-1">+</button>
                </div>
            </div>
        </div>
    )
}