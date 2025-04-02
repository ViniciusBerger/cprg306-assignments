"use client";

import { useState } from "react";

export default function NewItem({ onAddItem }) {
  const [name, setName] = useState("");

  const [category, setCategory] = useState("produce");

  const [quantity, setQuantity] = useState(1); //initializing with quantity of 1 as we cannot add 0 to the cart.

  const increment = () => {
    if (quantity < 20) {
      setQuantity(quantity + 1);
    }
  };

  const decrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    let item = { name, quantity, category };
    console.log(item);
    const id = Math.floor(Math.random() * 1000); // Generate a random ID
    let newItem = { ...item };
    newItem.id = id;
    onAddItem(newItem);
    alert(
      `Added Item: ${item.name}, Quantity: ${item.quantity}, Category: ${item.category}`
    );
    // data not being sent to a server - it will be done in a few weeks from now.

    setName(""); // Resetting name, quantity and category with initial data.
    setQuantity(1);
    setCategory("produce");
  };

  const handleNameChange = (event) => {
    const newName = event.target.value;
    setName(event.target.value);
  };

  return (
    <section className="m-2 p-2">
      <form
        onSubmit={handleSubmit}
        className="bg-gray-400 p-8 rounded-lg shadow-md w-full max-w-md"
      >
        <div className="mb-4">
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-900"
          >
            Name
          </label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(event) => setName(event.target.value)}
            required
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 text-gray-900" // Texto escuro
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="quantity"
            className="block text-sm font-medium text-gray-900"
          >
            Quantity
          </label>
          <div className="flex items-center mt-1">
            <button
              type="button"
              onClick={decrement}
              disabled={quantity <= 1}
              className="px-4 py-2 bg-blue-400 text-white rounded-l hover:bg-blue-500 disabled:bg-gray-700 disabled:cursor-not-allowed"
            >
              -
            </button>
            <span className="px-4 py-2 bg-gray-100 text-gray-900 text-center">
              {quantity}
            </span>
            <button
              type="button"
              onClick={increment}
              disabled={quantity >= 20}
              className="px-4 py-2 bg-orange-400 text-white rounded-r hover:bg-orange-500 disabled:bg-gray-400 disabled:cursor-not-allowed"
            >
              +
            </button>
          </div>
        </div>

        <div className="mb-4">
          <label
            htmlFor="category"
            className="block text-sm font-medium text-gray-900"
          >
            Category
          </label>
          <select
            id="category"
            value={category}
            onChange={(event) => setCategory(event.target.value)}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 text-gray-900" // Texto escuro
          >
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

        <button
          type="submit"
          className="w-full bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
        >
          Add
        </button>
      </form>
    </section>
  );
}
