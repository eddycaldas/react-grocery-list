import React, {Component} from 'react';
import './App.css';
import ListItem from './ListItem';

const apiURL = 'https://5d640b6026046800144d7265.mockapi.io/grocery'
class App extends Component {

  state = {
    newItem: '',
    update: false,
    notification: null,
    updateIndex: null,
    items: []
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
    this.alert('Item added')
  }
  
  deleteItem = (item) => {
    const items = this.state.items.filter(i => i.id !== item.id)
    //console.log(items);
    this.setState({
      items: items
    })
    this.alert('Item deleted')
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
    this.alert('Item updated')
  }

  alert = (notification) => {
    this.setState({ 
      notification 
    })
    setTimeout(() => {
      this.setState({ notification: null})
    }, 1000)
  }

    async componentDidMount() {
     const response = await fetch(apiURL);
      const json = await response.json();
      // console.log(json)
      this.setState({
        items: json
      })
  }

  
  render() {
    return(
      <div className='container mt-5'>
        <div className="input-group mt-5 mb-3">
          {this.state.notification &&
            <div className="alert alert-primary text-center mt-5" role="alert">
                {this.state.notification}
            </div>}
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
          disabled={this.state.newItem.length < 4}
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
