import React from 'react';
import'./nestedListItems.css';
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import FlipMove from 'react-flip-move';


function nestedListItems(props){
    const nestedlist = props.nesteditems;
    
    const nestedlistitems = nestedlist.map(nest =>{
        return <div className = "nestedList">
            <form id = "sublist" >
            <p>
            <input type = "text" 
                id = {nest.nestedkey} 
                value = {nest.nestedtext}
                onChange = {
                    (e) =>{
                        props.nestedsetUpdate(e.target.value,nest.key)    
                    }
                }
                />
            <span>
                <FontAwesomeIcon className = "faiconsn" icon = "trash"
                onClick = {
                    () => props.nesteddeleteItem(nest.key)
                }
                />
            </span>

            </p>

            </form>
        </div>
    })
    return(
        <div>
            <FlipMove duration = {300} easing = "ease-in-out">
            {nestedlistitems}
            </FlipMove>
        </div>
    )
    
    
    
}

export default nestedListItems;