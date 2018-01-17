import React, { Component } from 'react';
import { actionEditTodo } from '../actions/TodoActions.jsx';

export default class EditForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            todo: this.props.todo
        }

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {

        var editedTodo = {
            id: this.state.todo.id,
            task: this.refs.task.value.trim(),
            dateOfExpiry: this.refs.dateOfExpiry.value.trim(),
            assingedTo: this.refs.assingedTo.value.trim(),
            assingedBy: this.refs.assingedBy.value.trim()
        }

        actionEditTodo(editedTodo);
        this.props.updateStateToNull();
    }

    render() {
        const spanRight = {
            marginRight: "10px"
        }
        return (
            <div className="col-md-12">
                <h3>Edit Todo</h3>
                <form className="form-horizontal" onSubmit={this.handleClick}>
                    <div className="form-group">
                        <label className="control-label col-sm-8">Task:</label>
                        <div className="col-sm-10">
                            <input type="text" className="form-control" id="task" required defaultValue={this.state.todo.task} ref="task" />
                        </div>
                    </div>
                    <div className="form-group">
                        <label className="control-label col-sm-8">Date of expiry:</label>
                        <div className="col-sm-10">
                            <input type="text" className="form-control" id="dateOfExpiry" required ref="dateOfExpiry" defaultValue={this.state.todo.dateOfExpiry} />
                        </div>
                    </div>

                    <div className="form-group">
                        <label className="control-label col-sm-8">Assinged to:</label>
                        <div className="col-sm-10">
                            <input type="text" className="form-control" id="assingedTo" required ref="assingedTo" defaultValue={this.state.todo.assingedTo} />
                        </div>
                    </div>

                    <div className="form-group">
                        <label className="control-label col-sm-8">Assinged By:</label>
                        <div className="col-sm-10">
                            <input type="text" className="form-control" id="assingedBy" required ref="assingedBy" defaultValue={this.state.todo.assingedBy} />
                        </div>
                    </div>
                    <div className="form-group">
                        <div className="col-sm-offset-2 col-sm-10">
                            <button type="submit" className="btn btn-primary" style={spanRight}>Create</button>
                            <button type="reset" className="btn btn-danger">Cancel</button>
                        </div>
                    </div>
                </form>
            </div >
        )
    }
} 