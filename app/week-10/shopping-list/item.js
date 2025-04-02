export default function Item({ name, quantity, category, onSelect }) {
  return (
    <section
      onClick={() => onSelect({ name, quantity, category })}
      className="bg-gray-400 p-2 lg:max-w-md cursor-pointer"
    >
      <h2 className="font-bold text-2xl text-blue-800">{name}</h2>
      <p>
        Quantity available: {quantity} in {category}
      </p>
    </section>
  );
}
