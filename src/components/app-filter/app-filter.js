import "./app-filter.css";

const AppFilter = (props) => {
    const buttonsData = [
        {name: 'all', label: 'Все товары'},
        {name: 'rise', label: 'В приоритете'},
        {name: 'moreThen1000', label: 'Стоимость больше 50 BYN'}
    ];

    const buttons = buttonsData.map(({name, label}) => {
        const active = props.filter === name;
        const clazz = active ? 'btn-light' : 'btn-outline-light';
        return (
            <button type="button"
                    className={`btn ${clazz}`}
                    key={name}
                    onClick={() => props.onFilterSelect(name)}>
                    {label}
            </button>
        )
    })

    return (
        <div className="btn-group">
            {buttons}
        </div>
    )
}

export default AppFilter;