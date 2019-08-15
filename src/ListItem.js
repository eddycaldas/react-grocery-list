import React from 'react'

const ListItem = (props) => {
    return <li               
                className="list-group-item"
            >
                <button 
                type="button" 
                className="btn mr-3 btn-danger"
                onClick={props.deleteItem}>
                    <span className="glyphicon glyphicon-trash"></span>
                </button>      
                    {props.item.name}
                <button 
                type="button" 
                className="btn ml-3 btn-info"
                onClick={props.editItem}>
                    <span className="glyphicon glyphicon-pencil"></span>
                </button>  
            </li>  
}

export default ListItem