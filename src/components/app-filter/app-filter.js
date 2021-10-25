import "./app-filter.scss";

export default function AppFilter() {
  return (
    <div className="btn-group">
      <button className="btn btn-light" type="button">
        Все товары
      </button>
      <button className="btn btn-outline-light" type="button">
        К отгрузке
      </button>
      <button className="btn btn-outline-light" type="button">
        Стоимость больше 50 BYN
      </button>
    </div>
  );
}
