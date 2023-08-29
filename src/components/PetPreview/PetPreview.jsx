import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
import "./PetPreview.css";

export function PetPreview() {
  return (
    <Card className="card">
      <CardHeader className="card-header">
        <img
          src="https://i.imgur.com/Uj2JWw0.jpg"
          alt="card-image"
          className="card-img"
        />
      </CardHeader>
      <CardBody className="card-body">
        <Typography variant="h6" className="bold">
          Spike
        </Typography>
        <Typography variant="subtitle1" className="bold">
          Golden Retriever
        </Typography>
        <Typography className="bold">
          Neutered Male
        </Typography>
      </CardBody>
      <CardFooter className="pt-0">
        <Button>Read More</Button>
      </CardFooter>
    </Card>
  );
}
