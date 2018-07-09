import React, { Component } from 'react';

class ShowToDo extends Component {

    render() {
        return (
            this.props.items.map((listItem, i) =>
                <div key={i}>
                    <li>
                        <input type="text"
                            name={i}
                            defaultValue={listItem.text}
                            disabled={listItem.complete}
                            onChange={(e) => { this.props.handleUpdateTask(e) }}
                        ></input>
                &nbsp; &nbsp;<button onClick={() => { this.props.editItems(listItem.key) }}>Save</button>
                        &nbsp; &nbsp;<button onClick={() => { this.props.removeItems(listItem.key) }}>Remove</button>
                        &nbsp; &nbsp;<button onClick={() => { this.props.completeItem(listItem.key) }}>Complete</button>
                    </li><br/>
                </div>
            )

        );
    }
}

export default ShowToDo;