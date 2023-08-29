import React from 'react';
import { Card, CardBody, CardFooter, Typography, Button } from '@material-tailwind/react';
import './PetPreview.css';

export function PetPreview({ breed }) {
  return (
    <Card className="card">
      <CardBody className="card-body">
        <Typography variant="h6" className="bold">
          {breed.name}
        </Typography>
        <Typography variant="body2">
          Weight: {breed.weight.imperial} lbs ({breed.weight.metric} kg)
        </Typography>
        <Typography variant="body2">
          Height: {breed.height.imperial} in ({breed.height.metric} cm)
        </Typography>
        <Typography variant="body2">
          Life Span: {breed.life_span}
        </Typography>
        <Typography variant="body2">
          Temperament: {breed.temperament}
        </Typography>
        <Typography variant="body2">
          Origin: {breed.origin || 'Unknown'}
        </Typography>
      </CardBody>
      <CardFooter className="pt-0">
        <Button>Read More</Button>
      </CardFooter>
    </Card>
  );
}
