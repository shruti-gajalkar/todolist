import React, { Component } from 'react';

class AddToDo extends Component{

    render(){
        return(
            <div>
                <input 
                type='text'c
                name='addTask'
                onChange={(e)=>{this.props.handleAddTask(e)}}
                placeholder="Enter Task">
            </input>&nbsp; &nbsp;
            <button onClick={()=>{this.props.addItems()}}>Add</button>
            </div>
        );
    }
}

export default AddToDo;