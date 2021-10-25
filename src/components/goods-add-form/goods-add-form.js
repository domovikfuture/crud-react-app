import "./goods-add-form.scss";

export default function GoodsAddForm() {
  return (
    <div className="app-add-form">
      <h3>Добавьте новый товар</h3>
      <form className="add-form d-flex">
        <input
          type="text"
          className="form-control new-post-label"
          placeholder="Название"
        />
        <input
          type="number"
          className="form-control new-post-label"
          placeholder="Цена в BYN"
        />

        <button type="submit" className="btn btn-outline-light">
          Добавить
        </button>
      </form>
    </div>
  );
}
