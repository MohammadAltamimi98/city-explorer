import React, { Component } from 'react'

export class Map extends Component {
    render() {
        return (
            <div>
               <img src={`https://maps.locationiq.com/v3/staticmap?key=pk.0d3493300ad9bfd9d4a420db2f0cbe40&q&center=${this.props.lat},${this.props.lon}&zoom=10|icon:large-red-cutout|`} alt="map"/> 
            </div>
        )
    }
}

export default Map
