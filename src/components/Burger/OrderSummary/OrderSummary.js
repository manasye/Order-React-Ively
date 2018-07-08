import React from 'react';

import classes from './OrderSummary.css';
import Button from '../../UI/Button/Button';

const orderSummary = ( props ) => {
    const ingredientSummary = Object.keys(props.ingredients)
        .map(igKey => {
            return <p key = { igKey }> <span style = {{textTransform: 'capitalize'}}> 
                    { igKey } </span> : { props.ingredients[igKey] } </p>;
        });

    return (
        <div className = { classes.OrderSummary }>
            <h3>You Order</h3>
            <p>Burger with ingredients: </p>
            { ingredientSummary }
            <p>Continue to checkout?</p>
            <Button btnType = "Danger" clicked = { props.purchaseCancelled }>CANCEL</Button>
            <Button btnType = "Success" clicked = { props.purchaseContinued }>CONTINUE</Button>
        </div>
    );
};

export default orderSummary;