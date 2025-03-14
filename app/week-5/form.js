"use client"

import { useState } from "react"

export default function Form({onAddItem}) {

    const [item, setItem] = useState({name: '', quantity: 0, category: ''}); // item is an object with 3 properties

    const decrement = () => {
        if (item.quantity >= 1) {
            setItem({...item, quantity: item.quantity - 1});
        }
    }

    const increment = () => {
        if (item.quantity < 20) {
            setItem({...item, quantity: item.quantity + 1});
        }
    }

    const addItem = (newItem) => {
        setItem({...item, newItem});
    }

    const onHandleSubmit = (event) => {
        event.preventDefault();
        onAddItem(item);
        setItem({name: '', quantity: 0, category: ''});
    }

    return (
        <div className="flex justify-end items-center min-h-1/2 bg-white">
            <form onSubmit={onHandleSubmit} className="bg-gray-100 p-20 text-center m-auto mt-20 mb-20 rounded-lg shadow-md w-full bg-gray-100 max-w-md">
                
                <div className="mb-6">
                    <label htmlFor="name" className="block text-sm font-medium text-gray-900">Product name</label>
                    <input type="text" value={item.name} onChange={(e)=> setItem({...item, name:e.target.value})} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 text-gray-900" // Texto escuro
                     ></input>
                </div>
                
                <div className="flex mb-6"> 
                    <label htmlFor="quantity" className="block text-sm font-medium text-gray-900"></label>
                    <div className="flex justify-center pr-5 items-center m-auto mt-1">
                        <button type="button" onClick={decrement} disabled="" className="px-4 py-2 bg-red-500 text-white rounded-l text-center hover:bg-red-600 disabled:bg-gray-400 disabled:cursor-not-allowed">-</button>
                        <span className="px-4 py-2 bg-gray-100 text-gray-900 text-center">{item.quantity}</span>
                        <button type="button" onClick={increment} className="px-4 py-2 bg-blue-500 text-white text-center rounded-r hover:bg-blue-600 disabled:bg-gray-400 disabled:cursor-not-allowed">+</button>
                    </div>
        
                    <label htmlFor="category" className="block text-sm font-medium text-gray-900"></label>
                    <select value={item.category} onChange={(e) => setItem({...item, category:e.target.value})} className="mt-1 p-3 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 text-gray-900">
                        <option value="produce">Produce</option>
                        <option value="dairy">Dairy</option>
                        <option value="bakery">Bakery</option>
                        <option value="meat">Meat</option>
                        <option value="frozen foods">Frozen Foods</option>
                        <option value="canned goods">Canned Goods</option>
                        <option value="dry goods">Dry Goods</option>
                        <option value="beverages">Beverages</option>
                        <option value="snacks">Snacks</option>
                        <option value="household">Household</option>
                        <option value="other">Other</option>
                    </select>
                </div>

                <div className="flex justify-center">
                    <button type="submit" className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
                        Submit
                    </button>
                </div>
            </form>
        </div>
    )
}
