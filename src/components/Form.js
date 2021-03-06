import React from 'react';
import FormExplorer from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';


export class Form extends React.Component {
  render() {
    return (
      <div>

        <FormExplorer onSubmit={this.props.getLocation}>
          <FormExplorer.Group >
            <FormExplorer.Label>City Name </FormExplorer.Label>
            <FormExplorer.Control onChange={this.props.updateSearchField} type="text" placeholder="Enter City Name" />
            <FormExplorer.Text className="text-muted">
                           Make sure that your city name is written correctly &  don't send an empty string.
            </FormExplorer.Text>
          </FormExplorer.Group>


          <Button variant="primary" type="submit"> Explore  </Button> <p>   </p>

        </FormExplorer>

      </div>
    );
  }
}

export default Form;



// - note : when you change the name of the imported component all its dependent components should acquire that name
