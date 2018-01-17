import React, { Component } from 'react';
import todoStore from '../store/TodoStore.jsx';
import AddNew from './AddNew.jsx';
import EditForm from './EditForm.jsx'


export default class Form extends Component {
    constructor(props) {
        super(props);

        this.state = {
            editSingleTodo: this.props.editableTodo
        }

        this.updateStateToNull = this.updateStateToNull.bind(this)
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            editSingleTodo: nextProps.editableTodo
        })
    }

    updateStateToNull() {
        this.setState({
            editSingleTodo: null
        })
    }

    render() {

        return (
            <div className="row">
                {(this.state.editSingleTodo != null) ? <EditForm todo={this.state.editSingleTodo} updateStateToNull={this.updateStateToNull} /> : <AddNew />}
            </div>
        )
    }
}