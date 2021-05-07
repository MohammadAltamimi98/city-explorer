import React, { Component } from 'react';
import { Card, CardDeck } from 'react-bootstrap';

export class WeatherData extends Component {
  render() {
    return (this.props.weatherInfo.map((data, index) => {
      return <div key={index}><CardDeck>
        <Card bg={'primary'} text={'light'} border={'danger'} >
          <Card.Body>
            <Card.Title>Weather Summary 🌧️ ☀️ 🌈</Card.Title>
            <Card.Text>
               Date recorded: {data.date} <br/>
              Weather Description 🌡️ :  {data.description}.
            </Card.Text>
          </Card.Body>
        </Card>

      </CardDeck>;
      </div>;
    })

    );
  }
}

export default WeatherData;

