"use client"
export default function Item({name, quantity, category})
{
    return (
        <section className="p-4 w-48 m-2 border border-gray-800 bg-[#3b4d2b] rounded-lg font-medium">
            <p>{name}</p>
            <p className="text-gray-900">Amount: {quantity}</p>
            <p>Cat: {category}</p>
        </section>
    )
}