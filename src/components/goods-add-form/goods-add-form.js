import { Component } from "react";

import "./goods-add-form.scss";

export default class GoodsAddForm extends Component {

  constructor(props){
    super(props);
    this.state = {
      name: '',
      price: '',
    }
  }

  onValueChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  onSubmit = (e) => {
    e.preventDefault();
    if (this.state.name.length < 3 || !this.state.salary) return;
    this.props.onAdd(this.state.name, this.state.price);
    this.setState({
        name: '',
        price: ''
    })
}


  render(){
    const {name, price} = this.state;

    return (
      <div className="app-add-form">
        <h3>Добавьте новый товар</h3>
        <form 
        className="add-form d-flex"
        onSubmit = {this.onSubmit}
        >
          <input
            type="text"
            className="form-control new-post-label"
            placeholder="Название"
            name="name"
            value={name}  
            onChange={this.onValueChange}
          />
          <input
            type="number"
            className="form-control new-post-label"
            placeholder="Цена в BYN"
            name="price"
            value={price}  
            onChange={this.onValueChange}
          />
  
          <button 
          type="submit"
          className="btn btn-outline-light"
          >
            Добавить
          </button>
        </form>
      </div>
    );
  }
}
