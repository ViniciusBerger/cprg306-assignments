'use client'

import { useState } from "react"

export default function NewItem()
{
    const [count, setCount] = useState(0)
    
    function increment(){
        return setCount(count + 1)
    }
    function decrement(){
        return setCount(count - 1)
    }

    return (
        <section className="flex justify-center items-center min-h-screen bg-blue-100">
            <div className="bg-white p-10 text-center rounded-lg shadow-md w-full max-w-md">
            <p className="block text-sm font-medium text-gray-900">Counter:</p>
            <p className="block text-sm font-medium text-gray-900">{count}</p>
            <button onClick={decrement} className="px-4 py-2 bg-blue-300 text-white m-2 rounded-r hover:bg-orange-500 disabled:bg-gray-400 disabled:cursor-not-allowed">Decrement</button>
            <button onClick={increment} className="px-4 py-2 bg-blue-300 text-white m-2 rounded-r hover:bg-orange-500 disabled:bg-gray-400 disabled:cursor-not-allowed">Increment</button>
            
            </div>
        </section>
    )
}