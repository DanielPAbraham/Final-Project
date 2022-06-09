import React from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import { Card } from "react-bootstrap";
import PropTypes from "prop-types";
import { Button } from "react-bootstrap";

export const RecipeCard = (props) => {
    const { store, actions } = React.useContext(Context);

    return (
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={props.image} />
            <Card.Body>
                <Card.Title>{props.title}</Card.Title>
                <Button variant="primary" href={props.sourceUrl}>Get Recipe</Button>
            </Card.Body>
        </Card>
    )
}

RecipeCard.propTypes = {
    title: PropTypes.string,
    image: PropTypes.string,
    sourceUrl: PropTypes.string
};
