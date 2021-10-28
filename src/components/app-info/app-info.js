import "./app-info.scss";

export default function AppInfo({increased, goods}) {
  return (
    <div className="app-info">
      <h1>Учёт товаров на складе №</h1>
      <h2>Общее число товаров: {goods}</h2>
      <h2>К отгрузке готовы: {increased}</h2>
    </div>
  );
}
