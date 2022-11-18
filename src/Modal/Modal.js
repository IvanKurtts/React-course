import React from "react";
import './Modal.css';
import CoinCourse from './CoinCourse';

export default class Modal extends React.Component {
    state = {
        isOpen: false,
    }

    render() {
        return (
            <React.Fragment>
                <button onClick={()=> this.setState({isOpen:true})} 
                className="btn-hover color-1">Open modal</button>

            {this.state.isOpen && (<div className='modal'>
                <div className="modal-body">
                    <h1>Modal title</h1>
                    <p>Crypto currency courses:</p>
                    <CoinCourse></CoinCourse>
                    <button onClick={()=> this.setState({isOpen:false})} 
                    className="btn-hover color-2">Close modal</button>
                </div>
            </div>)}
            </React.Fragment>
        )
    }
}