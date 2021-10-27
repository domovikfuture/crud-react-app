import AppInfo from "../app-info/app-info";
import SearchPanel from "../search-panel/search-panel";
import AppFilter from "../app-filter/app-filter";
import GoodsList from "../goods-list/goods-list";
import GoodsAddForm from "../goods-add-form/goods-add-form";

import "./app.scss";

export default function App() {

  const data = [
    {name: "Cиликоновый бирюзовый чехол на Iphone 7/8/SE 2020", price: 11.99, increase: false, id: 1},
    {name: "Cиликоновый черный чехол на Iphone 7/8/SE 2020", price: 8.99, increase: true, id: 2},
    {name: "Cиликоновый белый чехол на Iphone 7/8/SE 2020", price: 10.99, increase: false, id: 3},
  ]

  return (
    <div className="app">
      <AppInfo />

      <div className="search-panel">
        <SearchPanel />
        <AppFilter />
      </div>

      <GoodsList data={data}/>
      <GoodsAddForm />
    </div>
  );
}
