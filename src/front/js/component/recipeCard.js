import React from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import { Card } from "react-bootstrap";
import PropTypes from "prop-types";
import { Button } from "react-bootstrap";

export const RecipeCard = ({ recipe }) => {
    const { store, actions } = React.useContext(Context);

    return (
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={recipe.image} />
            <Card.Body>
                <Card.Title>{recipe.title}</Card.Title>
                <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                </Card.Text>
                <Button variant="primary">Get Info</Button>
            </Card.Body>
        </Card>
    )
}

RecipeCard.propTypes = {
    title: PropTypes.string,
    image: PropTypes.string,
};