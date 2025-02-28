"use client"

import { useState } from "react"

export default function NewItem() {

    const decrement = () => {
        if (quantity >= 1) {
            setQuantity(quantity - 1);
        }
    }

    const increment = () => {
        if (quantity < 20) {
            setQuantity(quantity + 1)
        }
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        let item = [name, quantity, category];
        console.log(item);
        alert(`Added item: ${item[0]}, Quantity: ${item[1]}, Category: ${item[2]}`);

        setName('');
        setQuantity(0);
        setCategory('');
    }

    const [name, setName] = useState('')
    const [quantity, setQuantity] = useState(0)
    const [category, setCategory] = useState('')
    return (
        <section className="flex justify-end items-center min-h-screen bg-blue-100">
            <form onSubmit={handleSubmit} className="bg-white p-10 text-center m-auto rounded-lg shadow-md w-full bg-gray-100 max-w-md">
                
                <div className="mb-6">
                    <label htmlFor="name" className="block text-sm font-medium text-gray-900">Product name</label>
                    <input type="text" value={name} onChange={(e)=> setName(e.target.value)} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 text-gray-900" // Texto escuro
                     ></input>
                </div>
                
                <div className="mb-6"> 
                    <label htmlFor="quantity" className="block text-sm font-medium text-gray-900">Quantity</label>
                    <div class="flex justify-center items-center m-auto mt-1">
                        <button type="button" onClick={decrement} disabled="" className="px-4 py-2 bg-blue-300 text-white rounded-l text-center hover:bg-blue-500 disabled:bg-gray-400 disabled:cursor-not-allowed">-</button>
                        <span class="px-4 py-2 bg-gray-100 text-gray-900 text-center">{quantity}</span>
                        <button type="button" onClick={increment} class="px-4 py-2 bg-green-400 text-white text-center rounded-r hover:bg-green-500 disabled:bg-gray-400 disabled:cursor-not-allowed">+</button>
                    </div>
                </div>

                <div className="mb-6">
                    <label htmlFor="category" className="block text-sm font-medium text-gray-900">Category</label>
                    <select value={category} onChange={(e) => setCategory(e.target.value)} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 text-gray-900">
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
                    <button type="submit" className="w-full m-2 bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2">
                        Submit
                    </button>
                </div>
            </form>
        </section>
    )
}
