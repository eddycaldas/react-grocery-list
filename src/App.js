import React, {Component} from 'react';
import './App.css';

class App extends Component {
  state = {
    newItem: '',
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
      items: items
    })
    //console.log(items);
  }
  
  render() {
    return(
      <div className='container'>
        <div className="input-group mb-3">
          <input 
            type="text" 
            className="form-control mt-3" 
            placeholder="Add grocery"
            onChange={this.inputHandler}/>
        </div>
        <button 
          type="button" 
          className="btn btn-lg btn-block btn-primary"
          onClick={this.itemAdding}>
            Primary
        </button>
      </div>
      
    )
  }
}

export default App;
