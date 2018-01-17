import React, { Component } from 'react';
import List from './List.jsx';
import Form from './Form.jsx';


export default class Layout extends Component {
    constructor(props) {
        super(props)

        this.state = {
            editSingleTodo: null
        }
    }

    todoToEdit(todo) {
        this.setState({
            editSingleTodo: todo
        })
    }

    render() {
        return (
            <div className="container-fluid">
                <div className="col-md-12">
                    <h4>Welcome to React!</h4>
                </div>
                <div className="col-md-12">
                    <div className="row">
                        <div className="col-md-6">
                            <List todoToEdit={this.todoToEdit.bind(this)} />
                        </div>
                        <div className="col-md-6">
                            <Form editableTodo={this.state.editSingleTodo} />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}