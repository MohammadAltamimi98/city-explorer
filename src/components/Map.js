import React, { Component } from 'react'

export class Map extends Component {
    render() {
        return (
            <div>
               <img src={`https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_MAP_KEY}&q&center=${this.props.lat},${this.props.lon}&zoom=10|icon:large-red-cutout|`} alt="map"/> 
            </div>
        )
    }
}

export default Map
