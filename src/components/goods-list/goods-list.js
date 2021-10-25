import GoodsListItem from "../goods-list-item/goods-list-item";

import "./goods-list.scss";

export default function GoodsList() {
  return (
    <ul className="app-list list-group">
      <GoodsListItem />
      <GoodsListItem />
      <GoodsListItem />
    </ul>
  );
}
