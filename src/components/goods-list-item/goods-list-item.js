import "./goods-list-item.scss";

export default function GoodsListItem() {
  return (
    <li className="list-group-item d-flex justify-content-between">
      <span className="list-group-item-label">Силиконовый чехол</span>
      <input
        type="text"
        className="list-group-item-input"
        defaultValue="50 BYN"
      ></input>
      <div className="d-flex justify-content-center align-items-center">
        <button type="button" className="btn-cookie btn-sm">
          <i className="fas fa-cookie"></i>
        </button>

        <button type="button" className="btn-trash btn-sm">
          <i className="fas fa-trash"></i>
        </button>
        <i className="fas fa-star"></i>
      </div>
    </li>
  );
}
