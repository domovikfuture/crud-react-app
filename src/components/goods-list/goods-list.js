import GoodsListItem from "../goods-list-item/goods-list-item";

import "./goods-list.scss";

export default function GoodsList({data, onDelete, onToggleProp}) {

  const elements = data.map(item => {
    const {id, ...itemProps} = item;
    return (
      <GoodsListItem 
        key = {id} 
        {...itemProps}
        onDelete={() => onDelete(id)}
        onToggleProp={(e) => onToggleProp(id, e.currentTarget.getAttribute('data-toggle'))}
      />
    )
  })

  return (
    <ul className="app-list list-group">
      {elements}
    </ul>
  );
}
