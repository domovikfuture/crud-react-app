import GoodsListItem from "../goods-list-item/goods-list-item";

import "./goods-list.scss";

export default function GoodsList({data}) {

  const elements = data.map(item => {
    const {id, ...itemProps} = item;
    return (
      <GoodsListItem key = {id} {...itemProps}/>
    )
  })

  return (
    <ul className="app-list list-group">
      {elements}
    </ul>
  );
}
