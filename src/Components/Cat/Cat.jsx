import React from 'react';
import PropTypes from 'prop-types';
import {
  Card,
  CardHeader,
  CardTitle,
  CardImg,
  CardBody,
  Button
} from "shards-react";




const Cat = (props) => (
  <Card style={{ width: "350px" }}>
  <CardHeader>Progressive Web Cat</CardHeader>
  <CardImg src={props.catImageUrl} />
  <CardBody>
    <CardTitle>Cat Picture</CardTitle>
    <p>{ props.catText }</p>
    <Button onClick={props.newCatHandler}>New Cat</Button>
  </CardBody>
  </Card>
);

Cat.propTypes = {
  catImageUrl: PropTypes.string,
  catText: PropTypes.string
};

Cat.defaultProps = {
  catImageUrl: "",
  catText: ""
};

export default Cat;
