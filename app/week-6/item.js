export default function Item(props) {
    return (
        <section className="flex flex-col justify-between items-center shadow-lg bg-gray-100 h-40 w-40 rounded-lg p-5 m-3">
            <div className="flex-1 flex items-center">
                <h1 className="text-center">{props.name}</h1>
            </div>

            <div className="w-full flex flex-col items-center">
                <h2 className="font-bold">{props.quantity}</h2>
                <h2 className="text-gray-500">{props.category}</h2>
                <button className="bg-red-500 p-1/2 rounded-s text-white w-full flex flex-col items-center" onClick={()=>props.onDeleteItem(props.id)}>delete</button>
            </div>
        </section>
    );
}
