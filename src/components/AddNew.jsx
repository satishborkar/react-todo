import React, { Component } from 'react';
import { actionAddTodo } from '../actions/TodoActions.jsx';
import $ from 'jquery';
import 'jquery-ui/ui/widgets/datepicker';


export default class AddNew extends Component {
    constructor(props) {
        super(props);

        this.state = {
            magicNum: 123
        }
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(event) {
        event.preventDefault();

        var newTodo = {
            id: Date.now(),
            task: this.refs.task.value.trim(),
            dateOfExpiry: this.refs.dateOfExpiry.value.trim(),
            assingedTo: this.refs.assingedTo.value.trim(),
            assingedBy: this.refs.assingedBy.value.trim()
        }
        //console.log(newTodo);
        actionAddTodo(newTodo);

        document.forms[0].reset();
    }

    componentDidMount() {
        $(this.refs.dateOfExpiry).datepicker()

        // let _this = this;
        // $("#dateOfExpiry").on('click', function () {
        //     //alert("Hi......")
        //     $(_this.refs.dateOfExpiry).datepicker()

        //     _this.setState({
        //         magicNum: Math.random()
        //     });
        // });
    }


    render() {
        const spanRight = {
            marginRight: "10px"
        }
        return (
            <div className="col-md-12">
                <h3>Add New Todo {this.state.magicNum}</h3>
                <form className="form-horizontal" onSubmit={this.handleClick}>
                    <div className="form-group">
                        <label className="control-label col-sm-8">Task:</label>
                        <div className="col-sm-10">
                            <input type="text" className="form-control" id="task" required placeholder="Enter Task" ref="task" />
                        </div>
                    </div>
                    <div className="form-group">
                        <label className="control-label col-sm-8">Date of expiry:</label>
                        <div className="col-sm-10">
                            <input type="text" className="form-control" id="dateOfExpiry" required ref="dateOfExpiry" placeholder="Date of expiry" />
                        </div>
                    </div>

                    <div className="form-group">
                        <label className="control-label col-sm-8">Assinged to:</label>
                        <div className="col-sm-10">
                            <input type="text" className="form-control" id="assingedTo" required ref="assingedTo" placeholder="Name of the asignee" />
                        </div>
                    </div>

                    <div className="form-group">
                        <label className="control-label col-sm-8">Assinged By:</label>
                        <div className="col-sm-10">
                            <input type="text" className="form-control" id="assingedBy" required ref="assingedBy" placeholder="Assinged By" />
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