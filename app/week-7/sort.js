"use client"
export default function sort({sortBy}) {

    return (
        <div className='flex inline justify-around bg-white lg:w-full m:w-1/2' >
            <h1 onClick={()=>sortBy((a,b)=> a.name.localeCompare(b.name))}  className="text-center text-xl text-white m-7 bg-blue-500 lg:w-1/3 m:w-1/2 rounded-lg p-8 m-6 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2">sort by name</h1>
            <h1 onClick={()=>sortBy((a,b)=> a.quantity - b.quantity)} className="text-center text-xl text-white m-7 bg-blue-500 lg:w-1/3 m:w-1/2 rounded-lg p-8 m-6 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2">sort by quantity</h1>
            <h1 onClick={()=>sortBy((a,b)=> a.category.localeCompare(b.category))} className="text-center text-xl text-white m-7 bg-blue-500 lg:w-1/3 m:w-1/2 rounded-lg p-8 m-6 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2">sort by category</h1>
        </div>
    )
}