import React, {Component} from 'react';
import './App.css';

class App extends Component {
  state = {
    newItem: '',
    update: false,
    items: [
      {
        id: 1,
        name: 'milk'
      },
      {
        id: 2,
        name: 'bread'
      },
      {
        id: 3,
        name: 'cheese'
      },
      {
        id: 4,
        name: 'water'
      }
    ]
  }
  
  inputHandler = (event) => {
    //console.log(event.target.value);
    this.setState({
      newItem: event.target.value
    })
  }
  
  itemAdding = () => {
    const newItem = {
      id: this.state.items[this.state.items.length - 1].id + 1,
      name: this.state.newItem
    }
    //console.log(newItem);
    const items = this.state.items
    items.push(newItem)
    this.setState({
      items: items,
      newItem: ''
    })
    //console.log(items);
  }
  
  deleteItem = (item) => {
    const items = this.state.items.filter(i => i.id !== item.id)
    //console.log(items);
    this.setState({
      items: items
    })
  }
  
  updateItem = (index) => {
    //const theItem = this.state.items[index]
    //console.log(theItem);
    this.setState({
      update: true
    })
  }
  
  render() {
    return(
      <div className='container'>
        <div className="input-group mb-3">
          <input 
            type="text" 
            className="form-control mt-3" 
            placeholder="Add grocery"
            onChange={this.inputHandler}
            value={this.state.newItem}/>
        </div>
        <button 
          type="button" 
          className="btn mb-3 btn-lg btn-block btn-info"
          onClick={this.itemAdding}>
            {this.state.update ? "Update item" : "Add Grocery"}
        </button>
        
        <ul className="list-group">
            {this.state.items.map((item, index) => {
              return <li               
                        key={item.id}  
                        className="list-group-item"
                     >
                        <button 
                          type="button" 
                          className="btn mr-3 btn-danger"
                          onClick={() => {this.deleteItem(item)}}>
                            <span className="glyphicon glyphicon-trash"></span>
                        </button>      
                            {item.name}
                        <button 
                          type="button" 
                          className="btn ml-3 btn-info"
                          onClick={() => {this.updateItem(index)}}>
                            <span className="glyphicon glyphicon-pencil"></span>
                        </button>  
                     </li>                    
            })}          
        </ul>        
      </div>
      
    )
  }
}

export default App;
