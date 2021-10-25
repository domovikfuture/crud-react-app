import AppInfo from "../app-info/app-info";
import SearchPanel from "../search-panel/search-panel";
import AppFilter from "../app-filter/app-filter";
import GoodsList from "../goods-list/goods-list";
import GoodsAddForm from "../goods-add-form/goods-add-form";

import "./app.scss";

export default function App() {
  return (
    <div className="app">
      <AppInfo />
      <div className="search-panel">
        <SearchPanel />
        <AppFilter />
      </div>
      <GoodsList />
      <GoodsAddForm />
    </div>
  );
}
