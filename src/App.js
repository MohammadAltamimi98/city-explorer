import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Form from './components/Form';
import Footer from './components/Footer';
import axios from 'axios';
import Info from './components/Info';
import Map from './components/Map';
import WeatherData from './components/WeatherData';



export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchField: '',
      locationData:'',
      show:false,     // this flag controls when the image and the info show
      weatherData:[],
    }
  }





  getLocation = async (e) => {
    e.preventDefault();
    const locationUrl=`https://us1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_MAP_KEY}&q=${this.state.searchField}&format=json`;
    const locationRequest=await axios.get(locationUrl);

    const weatherUrl=`${process.env.REACT_APP_SERVER}/weather`;
    const weatherRequest= await axios.get(weatherUrl);
    console.log(weatherRequest); // we found out that it is an array so we need to loop through the component that uses this info

    // console.log(locationRequest); /// to check if there's an error in the request
    this.setState({
      locationData:locationRequest.data[0],
      show:true,
      weatherData:weatherRequest.data,

    })

    console.log(this.state.weatherData); // to check if its assigned to the new state.

  }



  

  reloadPage = (event) => window.location.reload();


  updateSearchField = (e) => {
    this.setState({ searchField:e.target.value });
    console.log(e.target.value);
    
  }

  
  render() {
    return (
      <div>
        <Header />
        <br />
        <Form updateSearchField={this.updateSearchField} getLocation={this.getLocation} reloadPage={this.reloadPage} />
        {this.state.show === true && <><Info name={this.state.locationData.display_name}/>
        <Map lat={this.state.locationData.lat} lon={this.state.locationData.lon} /><WeatherData weatherInfo={this.state.weatherData}/> </>}
        
        <Footer />
      </div>
    )
  }
}

export default App
