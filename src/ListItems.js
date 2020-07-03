import React from 'react';
import'./ListItems.css';
import App from './App'
import NestedListItems from './NestedListItems'
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import FlipMove from 'react-flip-move';



class ListItems extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            nesteditems:[],
          
          nestedItem:{
            nestedtext:"",
            nestedkey:""
          }
        }
        }
        
        
    
    handleNested(e){
        this.setState({
            nestedItem:{
                nestedtext:e.target.value,
                nestedkey:Date.now()
            }
        });

        
    }
    addnested(e){
        e.preventDefault();
        const fuck = this.state.nestedItem;
        console.log(fuck);
        if(fuck.nestedtext!==""){
            const nesteditems =[...this.state.nesteditems, fuck];
            this.setState({
              nesteditems: nesteditems,
              nestedItem:{
                nestedtext:"",
                nestedkey:""
              },
              
            })
          }
          
    }
    nestedsetUpdate(nestedtext,nestedkey){
        const nesteditems = this.state.nesteditems;
        nesteditems.map(nest =>{
        if(nest.nestedkey ===nestedkey){
            nest.nestedtext=nestedtext;
            }
        })
        this.setState({
        nesteditems: nesteditems
            })
        }
    nesteddeleteItem(nestedkey){
        const nestfilteredItems = this.state.nesteditems.filter(nest =>
            nest.nestedkey!==nestedkey);
            this.setState({
              nesteditems: nestfilteredItems,
            })
        }

    nestedInApp(e){
        console.log("macha");
        return <div>
        <form id = "subtask" onSubmit ={this.addnested.bind(this, )}>
        <input type = "text" placeholder = "sub to do"
            value = {this.state.nestedItem.nestedtext}
            onChange = {this.handleNested.bind(this, )} 
        />
        <button>add</button>

        </form> 
    </div>
    }
    
    
    render(){
        const items = this.props.items; 
        const listitems = items.map(item =>{
        return <div className = "list" key = {item.key}>
            <p>
                <input type = "text" 
                id = {item.key} 
                value = {item.text}
                onChange = {
                    (e) =>{
                        this.props.setUpdate(e.target.value,item.key)    
                    }
                }
                />
            <span>
                <FontAwesomeIcon className = "faicons" icon = "trash"
                onClick = {
                    () => this.props.deleteItem(item.key)
                }
                />
            </span>
            
            
            
            </p>
            <span>
                <FontAwesomeIcon className = "faico" icon = "plus"
                onClick = {
                    () => this.nestedInApp()
                }
                    
                
                />
            </span>
            <div className = "newnest">
            <form id = "subtask" onSubmit ={this.addnested.bind(this, )}>
            <input type = "text" placeholder = "sub to do"
                value = {this.state.nestedItem.nestedtext}
                onChange = {this.handleNested.bind(this, )} 
            />
            <button>add</button>

            </form>
            <NestedListItems
            nesteditems = {this.state.nesteditems}
            nestedsetUpdate = {this.nestedsetUpdate.bind(this, )}
            nesteddeleteItem = {this.nesteddeleteItem.bind(this,)}
            >
                
            </NestedListItems> 
        </div>
            
            
            
            
            
    </div >

    })
    
    
    
   
    return(
        <div>
            <FlipMove duration = {300} easing = "ease-in-out">
            {listitems}
            </FlipMove>
            
                

            
            

            
                
            
             
            </div>
    )

    }
        
}
export default ListItems;

