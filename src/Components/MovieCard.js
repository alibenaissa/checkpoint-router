import React from 'react'
import {Button, Card} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Rate from './Rate'
function movieCard({movie}) {
    return (
        <div>
          <Card style={{ width: '18rem' }}>
     
  <Card.Img variant="top" src={movie.image} />

  <Card.Body>
    <Card.Title>{movie.name}</Card.Title>
    <Link to ={`/Details/${movie.id}`} > <Button variant="primary">Details</Button> </Link>
    
  </Card.Body>
</Card>
        </div>
    )
}

export default movieCard
