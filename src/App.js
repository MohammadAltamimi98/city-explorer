import React, { Component } from 'react'
import Header from './components/Header'
import Form from './components/Form'
import Footer from './components/Footer'
import axios from 'axios';
import Info from './components/Info'
import Map from './components/Map'


export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchField: '',
      locationData:'',
      show:false,     // this flag controls when the image and the info show
    }
  }





  getLocation = async (e) => {
    e.preventDefault();
    const locationUrl=`https://us1.locationiq.com/v1/search.php?key=pk.0d3493300ad9bfd9d4a420db2f0cbe40&q=${this.state.searchField}&format=json`;
    const locationRequest=await axios.get(locationUrl);
    // console.log(locationRequest); /// to check if there's an error in the request
    this.setState({
      locationData:locationRequest.data[0],
      show:true
    })

    // console.log(this.state.locationData); // to check if its assigned to the new state.

  }





  updateSearchField = (e) => {
    this.setState({ searchField:e.target.value });
    console.log(e.target.value);
    
  }

  
  render() {
    return (
      <div>
        <Header />
        <br />
        <Form updateSearchField={this.updateSearchField} getLocation={this.getLocation} />
        {this.state.show&& <><Info name={this.state.locationData.display_name}/>
        <Map lat={this.state.locationData.lat} lon={this.state.locationData.lon} /> </>}
        
        <Footer />
      </div>
    )
  }
}

export default App
