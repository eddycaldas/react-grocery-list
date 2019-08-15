import React, {Component} from 'react';
import './App.css';
import ListItem from './ListItem';

class App extends Component {
  state = {
    newItem: '',
    update: false,
    updateIndex: null,
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
  
  generateId = () => {
    const theId = this.state.items[this.state.items.length - 1]
    if (theId) {
      return theId.id + 1
    } else {
      return 1
    }
  }
  
  itemAdding = () => {
    const newItem = {
      id: this.generateId(),
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
  
  editItem = (index) => {
    const theItem = this.state.items[index]
    //console.log(theItem.name);
    this.setState({
      update: true,
      newItem: theItem.name,
      updateIndex: index
    })
  }
  
  UpdateItem = () => {
    const item = this.state.items[this.state.updateIndex]
    //console.log(item);
    item.name = this.state.newItem
    //console.log(item.name);
    const items = this.state.items
    items[this.state.updateIndex] = item
    this.setState({
      items,
      update: false,
      updateIndex: null,
      newItem:''
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
          onClick={this.state.update ? this.UpdateItem : this.itemAdding}>
            {this.state.update ? "Update item" : "Add Grocery"}
        </button>
          {!this.state.update ? <ul className="list-group">
              {this.state.items.map((item, index) => {
                return <ListItem 
                       key={item.id}
                       item={item}
                       deleteItem={() => {this.deleteItem(item)}}
                       editItem={() => {this.editItem(index)}}
                       />                  
              })}          
          </ul> : null }
      </div>
      
    )
  }
}

export default App;
