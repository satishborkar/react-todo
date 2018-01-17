import React, { Component } from 'react';

class Modal extends Component {
    constructor(props) {
        super(props)

        // this.state = {
        //     isVisible: this.props.isVisible
        // }

        // this.setInvisible = this.setInvisible.bind(this);
        // this.setVisible = this.setVisible.bind(this);
    }

    // setInvisible() {
    //     this.setState({
    //         isVisible: "none"
    //     })
    // }

    // componentDidMount(){
    //     console.log("didmount")
    //     this.setVisible();
    // }

    // shouldComponentUpdate(nextProps, nextState) {
    //     return true
    //     this.setVisible();
    // }

    // setVisible() {
    //     this.setState({
    //         isVisible: this.props.isVisible
    //     })
    // }

    render() {
        return (
            <div className="overlay">
                <div className="confirm-box">
                    <p> {this.props.modalMsg}</p>
                    <div style={{ marginTop: "40px", textAlign: "center" }}>
                        <button onClick={this.props.action} className="btn btn-success" style={{ marginRight: "10px", minWidth: "80px" }}> Yes </button>
                        <button onClick={this.props.hideModal} className="btn btn-danger" style={{ minWidth: "80px" }}> No </button>
                    </div>
                </div>
            </div >
        )
    }
}

export default Modal;