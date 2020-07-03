import React from 'react';
import './App.css';
import ListItems from './ListItems';
import { library } from '@fortawesome/fontawesome-svg-core';
import {faTrash} from '@fortawesome/free-solid-svg-icons';
import {faPlus} from '@fortawesome/free-solid-svg-icons';
import nestedListItems from './nestedListItems';

library.add(faTrash);
library.add(faPlus);

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      items:[],
      currentItem:{
        text:"",
        key:""
      },
      
      
    }
    this.handleInput = this.handleInput.bind(this);
    this.addItem = this.addItem.bind(this);

    this.setUpdate = this.setUpdate.bind(this);
    
    
  }
  handleInput(e){
    this.setState({
        currentItem:{
            text:e.target.value,
            key:Date.now()
        }
    })
  }

  addItem(e){
    e.preventDefault();
    const newItem = this.state.currentItem;
    console.log(newItem);
    
    if(newItem.text!==""){
      const items =[...this.state.items, newItem];
      this.setState({
        items: items,
        currentItem:{
          text:"",
          key:""
        },
        
      })
      console.log(this.state.items);
    }

  }
  deleteItem(key){
    const filteredItems = this.state.items.filter(item =>
      item.key!==key);
      this.setState({
        items: filteredItems,
      })
  }
  setUpdate(text,key){
    const items = this.state.items;
    items.map(item =>{
      if(item.key ===key){
        item.text=text;
      }
    })
    this.setState({
      items: items
    })

  }

  
    
  
  render(){
    return (
      <div className = "App">
        <header>
        <form id = "to-do-form" onSubmit = {this.addItem}>
          <input type = "text" placeholder = "work to be done..."
          value ={this.state.currentItem.text}
          onChange={this.handleInput}
          />
            <button type = "submit" >add</button>
          
        </form>
      </header>
      <ListItems 
        items = {this.state.items}
        deleteItem = {this.deleteItem.bind(this,)}
        setUpdate = {this.setUpdate}
        
        
      >
        
      </ListItems>
      
      
      
      
      </div>
    );
    }
}

export default App;
