import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';



export class MovieData extends Component {
  render() {
    return (


      this.props.movieInfo.map((data, index) => {
        return <div key={index}>

          <Card style={{ width: '18rem' }}>


            {data.image !== 'http://image.tmdb.org/t/p/w342null' &&
            <Card.Img variant="top" width={50} height={250} src={data.image} />
            }
            {/* //this will remove the error with regards to the null images  */}

            <Card.Body>
              <Card.Title>{data.title}</Card.Title>
              <Card.Text>
              Release date: {data.releaseDate}<br />
              Rating: {data.rating}
              </Card.Text>
            </Card.Body>
          </Card>
          <br/>
        </div>;
      }





      ));
  }
}

export default MovieData;
