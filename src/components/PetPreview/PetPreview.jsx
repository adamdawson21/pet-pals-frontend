import React from 'react';
import { Card, CardBody, CardFooter, Typography, Button } from '@material-tailwind/react';
import { Link } from 'react-router-dom';
import './PetPreview.css';

export function PetPreview({ breed }) {
  return (
    <Card className="card">
      <CardBody className="card-body">

        <img
          src={breed.image}
          alt={breed.name}
          className="card-img h-48 object-contain w-full"
        />

        <Typography variant="h6" className="bold">
          {breed.name}
        </Typography>
        <Typography variant="body2">
          Age: {breed.age}
        </Typography>
      </CardBody>
      <CardFooter className="pt-0">
        <Link to={`/alldogs/${breed.id}`}>
          <Button>Read More</Button>
        </Link>
      </CardFooter>
    </Card>
  );
}