import React from 'react'
import './Modal.scss'

export default class Modal extends React.Component{
    state = {
        isOpen: false
    }

    render() {
        return (
            <React.Fragment>
                <button onClick={() => this.setState({isOpen: true})}>Open modal</button>

                {this.state.isOpen && <div className="modal">
                    <div className="modal__body">
                        <h1 className="modal__title">Modal title</h1>
                        <p className="modal__text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. A, nemo!</p>
                        <button onClick={() => this.setState({isOpen: false})} className="model__close">Close modal</button>
                    </div>
                </div>}
            </React.Fragment>
        )
    }
}