import React, { Component } from 'react'
import { Card, CardDeck } from 'react-bootstrap'

export class WeatherData extends Component {
    render() {
        return (this.props.weatherInfo.map((data, index) => {
            return <CardDeck>
                <Card key={index}  bg={'primary'} text={'light'} border={'danger'} >
                    <Card.Body>
                        <Card.Title><h1>Weather Summary 🌧️ ☀️ 🌈</h1></Card.Title>
                             <Card.Text>
                            <h4> Date recorded: {data.date}</h4>
                           <h2>Weather Description 🌡️ :  {data.description}.</h2>
                        </Card.Text>
                    </Card.Body>
                </Card>
                {/* <p>{data.date}</p>
                    <p>{data.description}</p> */}
            </CardDeck>

        })

        )
    }
}

export default WeatherData

//     < Card style = {{ width: '18rem' }} bg = { 'primary'} text = { 'light'} border = { 'danger'} >
//         <Card.Body>
//             <Card.Title>Weather Summary </Card.Title>
//             <Card.Header><P>{data.date}</P></Card.Header>
//             <Card.Text>
//                 <p>{data.description}</p>
//             </Card.Text>
//         </Card.Body>
// </Card >