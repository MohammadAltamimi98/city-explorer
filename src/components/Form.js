import React, { Component } from 'react'

export class Form extends Component {
    render() {
        return (
            <div>
                <form onSubmit={this.props.getLocation}>
                    <input onChange={this.props.updateSearchField} type="text" placeholder="City Name"/>
                    <input type="submit" value="Explore" />
                </form>
            </div>
        )
    }
}

export default Form
