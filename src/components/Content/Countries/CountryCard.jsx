import React from "react";
import "./CountryCard.scss";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const CountryCard = ({ country }) => {
  return (
    <Card style={{ width: "20rem" }}>
      <Card.Img varint="top" src={country.flags.svg} className="country-flag" />
      <Card.Body>
        <Card.Title>
          <h2>{country.name.common}</h2>
        </Card.Title>
        <Card.Text>
          <h5>{country.region}</h5>
        </Card.Text>
        <Button variant="primary">
          <Link to={`country ${country.name.common}`} className="country-link">
            {" "}
            Go somewhere{" "}
          </Link>
        </Button>
      </Card.Body>
    </Card>
  );
};

export default CountryCard;
