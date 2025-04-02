"use client";

import Item from "./item";
import { useState } from "react";

function ItemList({ items, onItemSelect }) {
  console.log("items: ", items);
  return (
    <ul>
      {items.map((item) => (
        <li key={item.id} className="p-2">
          <Item {...item} onSelect={onItemSelect} />
        </li>
      ))}
    </ul>
  );
}

export default function Page({ items, onItemSelect }) {
  const [sortBy, setSortBy] = useState("name");

  const sortedItems = [...items].sort((a, b) => {
    if (sortBy === "name") {
      return a.name.localeCompare(b.name);
    } else if (sortBy === "category") {
      return a.category.localeCompare(b.category);
    }
    return 0;
  });

  const handleItemSelect = (item) => {
    onItemSelect(item);
  };

  return (
    <section className="m-2 p-2">
      <div className="m-2 p-2">
        <button
          onClick={() => setSortBy("name")}
          className={`px-4 py-2 rounded ${
            sortBy === "name"
              ? "bg-blue-800 text-white"
              : "bg-gray-600  text-white"
          }`}
        >
          Sort by name
        </button>
        <button
          onClick={() => setSortBy("category")}
          className={`px-4 py-2 rounded ${
            sortBy === "category"
              ? "bg-blue-800 text-white"
              : "bg-gray-600  text-white"
          }`}
        >
          Sort by category
        </button>
      </div>

      <ItemList items={sortedItems} onItemSelect={handleItemSelect} />
    </section>
  );
}
