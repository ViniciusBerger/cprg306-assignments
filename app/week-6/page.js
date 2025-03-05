import ItemList from "./item-list";
import Items from "./items.json";
export default function Page() {
    return (
        <div>
            <ItemList items= {Items}/>
        </div>
    );
}