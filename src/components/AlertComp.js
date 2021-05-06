import React, { Component } from 'react'
import Alert from 'react-bootstrap/Alert';



export class AlertComp extends Component {
    render() {
        return (
            <div>
                <Alert show={this.props.alertDisplay} variant={'danger'} dismissible  onClose={this.props.onClose}>
                    {this.props.errorMessage}
                </Alert>
                
            </div>
        )
    }
}

export default AlertComp
