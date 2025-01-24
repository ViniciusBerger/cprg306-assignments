import ItemList from "./item-list";
export default function Page() {
    return (
      <main>
        <header><h1 className=" p-8">shopping list</h1></header>
        <h2 className=" p-5 w-1/4 bg-[#101010] rounded-lg"><ItemList/></h2>
      </main>
    );
  }