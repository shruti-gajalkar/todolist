import React, { Component } from 'react';
import AddToDo from './add-todo';
import ShowToDo from './show-todos';

class ToDoContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [],
            task: '',
            newText: '',
        };
    }
    handleAddTask(event) {
        this.setState({
            task: event.target.value
        })
    }
    handleUpdateTask(event) {
        this.setState({
            newText: event.target.value
        })
    }

    addItems() {
        if (this.state.task !== '') {
            var newItem = {
                text: this.state.task,
                key: Date.now(),
                complete: false
            };
            this.state.items.push(newItem)
            this.setState(() => {
                return {
                    items: this.state.items
                };
            });
            this.state.task = '';
        }
        console.log(this.state.items);
    }

    removeItems(key) {
        var filteredItems = this.state.items.filter((item) => {
            return (item.key !== key);
        });

        this.setState({
            items: filteredItems
        });
    }

    completeItem(key) {

        var items = this.state.items;
        var index = items.findIndex(i => i.key === key)
        items[index].complete = true;
        this.setState({
            items: items
        });
    }

    editItems(key) {

        var items = this.state.items;
        var index = items.findIndex(i => i.key === key)
        items[index].text = this.state.newText;
        this.setState({
            items: items
        });
        console.log(this.state.items);
    }

    render() {
        return (
            <div>
                 <br />
                <br />
                <AddToDo
                    addItems={() => { this.addItems() }}
                    handleAddTask={(event) => { this.handleAddTask(event) }}
                />
                <br />
                <br />
                <ShowToDo
                    items={this.state.items}
                    removeItems={(key) => { this.removeItems(key) }}
                    completeItem={(key) => { this.completeItem(key) }}
                    editItems={(key) => { this.editItems(key) }}
                    handleUpdateTask={(event) => { this.handleUpdateTask(event) }}
                />
            </div>
        );
    }
}

export default ToDoContainer;