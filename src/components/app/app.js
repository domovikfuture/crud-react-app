import { Component } from "react";

import AppInfo from "../app-info/app-info";
import SearchPanel from "../search-panel/search-panel";
import AppFilter from "../app-filter/app-filter";
import GoodsList from "../goods-list/goods-list";
import GoodsAddForm from "../goods-add-form/goods-add-form";

import "./app.scss";

export default class App extends Component {
  constructor(props){
    super(props);
     this.state = {
      data : [
        {name: "Cиликоновый бирюзовый чехол на Iphone 7/8/SE 2020", price: 11.99, priority: true, increase: false, id: 1},
        {name: "Cиликоновый черный чехол на Iphone 7/8/SE 2020", price: 8.99, priority: false, increase: true, id: 2},
        {name: "Cиликоновый белый чехол на Iphone 7/8/SE 2020", price: 10.99, priority: false, increase: false, id: 3},
      ],
    }
    this.maxId = 4;
  }

  deleteItem = (id) => {
    this.setState(({data}) => {
      return {
        data: data.filter(item => item.id !== id)
      }
    })
  }

  addItem = (name, price) => {
    const newItem = {
        name, 
        price,
        priority: false,
        increase: false,
        id: this.maxId++
    }
    this.setState(({data}) => {
        const newArr = [...data, newItem];
        return {
            data: newArr
        }
    });
  }

  onToggleProp = (id, prop) => {
    this.setState(({data})=>({
      data: data.map(item=>{
        if (item.id === id) {
          return {...item, [prop]: !item[prop]}
        }
        return item;
      })
    }))
  }
 
  render(){
    const goods = this.state.data.length;
    const increased = this.state.data.filter(item => item.increase).length;
    return (
      <div className="app">
        <AppInfo goods = {goods} increased = {increased} />
  
        <div className="search-panel">
          <SearchPanel />
          <AppFilter />
        </div>
  
        <GoodsList 
          data={this.state.data}
          onDelete={this.deleteItem}
          onToggleProp={this.onToggleProp}
        />
        <GoodsAddForm onAdd={this.addItem}/>
      </div>
    );
  }
}
