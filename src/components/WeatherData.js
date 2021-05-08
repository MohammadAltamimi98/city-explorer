import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';

export class WeatherData extends Component {
  render() {
    return (this.props.weatherInfo.map((data, index) => {
      return <div key={index}>
        <Card style={{ width: '18rem' }} bg={'primary'} text={'light'} border={'danger'} >
          <Card.Body width={250} height={250} >
            <Card.Title>Weather Summary 🌧️ ☀️ 🌈</Card.Title>
            <Card.Text>
               Date recorded: {data.date} <br/>
              Weather Description 🌡️ :  {data.description}.
            </Card.Text>
          </Card.Body>
        </Card>
        <br/>


      </div>;
    })

    );
  }
}

export default WeatherData;

