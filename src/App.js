import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Form from './components/Form';
import Footer from './components/Footer';
import axios from 'axios';
import Info from './components/Info';
import Map from './components/Map';
import WeatherData from './components/WeatherData';
import Alert from './components/AlertComp';



export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchField: '',
      locationData: '',
      show: false, // this flag controls when the image and the info show
      weatherData: [],
      alertDisplay: false,
      errorMessage: ''
    };
  }





  getLocation = async (e) => {
    e.preventDefault();

    try {
      if (this.state.searchField !== '') {

        const locationUrl = `https://us1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_MAP_KEY}&q=${this.state.searchField}&format=json`;
        const locationRequest = await axios.get(locationUrl);
        this.setState({
          locationData: locationRequest.data[0],
        });
        this.getWeather();
      } else {
        this.setState({
          errorMessage: 'Please enter a valid city name.',
          alertDisplay: true,
          locationData: '',
          show: false,
          weatherData: []
        });
      }
    }
    catch (error) {
      console.log(error);
      this.setState({
        alertDisplay: true,
        errorMessage: error,
        locationData:'',
      });
    }



  }





  getWeather = async () => {

    const weatherUrl = `${process.env.REACT_APP_SERVER}/weather`;
    const weatherRequest = await axios.get(weatherUrl);


    this.setState({
      show: true,
      weatherData: weatherRequest.data,
    });

  }






  reloadPage = (event) => {
    window.location.reload();
    this.setState({
      alertDisplay: false,
      errorMessage: '',
    });
  }


  updateSearchField = (e) => {
    this.setState({
      searchField: e.target.value
    });

  }


  onClose = () => {
    this.setState({ alertDisplay: false,
      errorMessage:'', });
  }


  render() {
    return (
      <div>
        <Header />
        <br />
        <Form updateSearchField={this.updateSearchField} getLocation={this.getLocation} reloadPage={this.reloadPage} />
        {this.state.show === true ?
          <>
            <Info name={this.state.locationData.display_name} />
            <Map lat={this.state.locationData.lat} lon={this.state.locationData.lon} />
            <WeatherData weatherInfo={this.state.weatherData} />
          </>
          :

          <Alert alertDisplay={this.state.alertDisplay} errorMessage={this.state.errorMessage} onClose={this.onClose} />

        }





        <Footer />
      </div>
    );
  }
}

export default App;
