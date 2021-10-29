import "./app-info.css";

const AppInfo = ({increased, employees}) => {
    return (
        <div className="app-info">
            <h1>Учет товаров на складе</h1>
            <h2>Общее число товаров: {employees}</h2>
            <h2>К отгрузке готовы: {increased}</h2>
        </div>
    )
}

export default AppInfo;