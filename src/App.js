import React, { Component } from 'react'
import Header from './components/Header'
import Form from './components/Form'
import Footer from './components/Footer'



export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchField: ''

    }
  }





  getLocation = (e) => {
    e.preventDefault();

    console.log(this.state.searchField);

  }

  updateSearchField = (e) => {
    this.setState({ searchField: e.target.value });
    console.log(e.target.value);
  }

  render() {
    return (
      <div>
        <Header />
        <br />
        <Form updateSearchField={this.updateSearchField} getLocation={this.getLocation} />
        <Footer />
      </div>
    )
  }
}

export default App
