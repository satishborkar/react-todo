import React, { Component } from 'react';
import todoStore from '../store/TodoStore.jsx';
import { actionDeleteTodo, actionEditTodo } from '../actions/TodoActions.jsx';
import Modal from './modal.jsx';

export default class List extends Component {
    constructor(props) {
        super(props);

        this.state = {
            allTodos: todoStore.getAllTodos(),
            confirmDelete: false,
            canDelete: false,
            isVisible: false
        }

        this.updateState = this.updateState.bind(this);
        this.deleteTodo = this.deleteTodo.bind(this);
        this.hideModal = this.hideModal.bind(this);
    }

    updateState() {
        this.setState({
            allTodos: todoStore.getAllTodos()
        })
    }

    componentDidMount() {
        todoStore.addChangeListener(this.updateState);
    }

    componentWillUnmount() {
        todoStore.removeChangeListener(this.updateState)
    }

    deleteTodo(todo) {
        this.setState({
            isVisible: true,
            selectedTodo: todo,
            todoToEdit: null
        })
    }

    hideModal() {
        this.setState({
            isVisible: false
        })
    }


    // componentWillReceiveProps(newProps){        
    // }

    confirmDeleteTodo(selectedTodo) {

        // console.log(selectedTodo)

        // this.setState(prevState =>({
        //     canDelete:true
        // }))
        //console.log(todo); 

        this.setState({
            isVisible: false
        })

        if (this.state.selectedTodo != null) {
            actionDeleteTodo(selectedTodo);
        }
    }



    render() {

        const { allTodos } = this.state;

        const dataRow = allTodos.map((todo) => {
            return (
                <tr key={todo.id}>
                    <td>{todo.task}</td>
                    <td>{todo.dateOfExpiry}</td>
                    <td>{todo.assingedTo}</td>
                    <td>{todo.assingedBy}</td>
                    <td>
                        <a href="#nogo" onClick={this.props.todoToEdit.bind(this, todo)}> Edit  </a>
                        <a href="#nogo" onClick={() => { this.deleteTodo(todo) }}> Delete  </a>
                    </td>
                </tr>
            )
        }).reverse();

        const emptyRow = (
            <tr>
                <td colSpan="5" style={{ backgroundColor: '#dc3545', textAlign: 'center', color: "#fff" }}>
                    No Record Found !!
                </td>
            </tr>
        );

        return (
            <div className="col-md-12">
                <table className="table">
                    <thead>
                        <tr style={{ backgroundColor: '#007bff', color: "#fff" }} >
                            <td>Task</td>
                            <td>Date of Expiry</td>
                            <td>Assinged To</td>
                            <td>Assinged By</td>
                            <td>Action</td>
                        </tr>
                    </thead>
                    <tbody>
                        {allTodos.length > 0 ? dataRow : emptyRow}
                    </tbody>
                </table>
                {this.state.isVisible && <Modal action={this.confirmDeleteTodo.bind(this, this.state.selectedTodo)} hideModal={this.hideModal} modalMsg="Do you really want to delete record !!" />}
                {/* {(this.state.confirmDelete && this.state.isVisible === "block") && } */}
            </div>
        )
    }
}
