import GoodsListItem from "../goods-list-item/goods-list-item";

import "./goods-list.scss";

export default function GoodsList({data}) {

  const elements = data.map(item => {
    return (
      <GoodsListItem {...item}/>
    )
  })

  return (
    <ul className="app-list list-group">
      {elements}
    </ul>
  );
}
