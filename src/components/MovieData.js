import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';

export class MovieData extends Component {
  render() {
    return (


      this.props.movieInfo.map((data, index) => {
        return <Card key={index}>
          <Card.Img variant="top" width={'20'} src={data.image}/>
          <Card.Body>
            <Card.Title>{data.title}</Card.Title>
            <Card.Text>
              Release date: {data.releaseDate}<br/>
              Rating: {data.rating}
            </Card.Text>
          </Card.Body>
        </Card>;
      }





      ) );
  }
}

export default MovieData;
