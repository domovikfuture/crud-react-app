import "./goods-list-item.scss";

export default function GoodsListItem (props) {
  const {name, price, onDelete, onToggleProp, increase, priority} = props;

  let classNames = "list-group-item d-flex justify-content-between";

  if(increase) {
    classNames += " increase";
  }

  if(priority) {
    classNames += " like";
  }

  return (
    <li className={classNames}>
      <span 
      className="list-group-item-label"
      onClick={onToggleProp}
      data-toggle="priority"
      >
        {name}
      </span>
      <input
        type="text"
        className="list-group-item-input"
        defaultValue={price + ' BYN'}
      />
      <div className="d-flex justify-content-center align-items-center">
        <button 
        type="button" 
        className="btn-cookie btn-sm"
        onClick={onToggleProp}
        data-toggle="increase"
        >
          <i className="fas fa-cookie"></i>
        </button>

        <button 
        type="button"
        className="btn-trash btn-sm"
        onClick={onDelete}
        >
          <i className="fas fa-trash"></i>
        </button>
        <i className="fas fa-star"></i>
      </div>
    </li>
  );
  }

