import React, {Component} from 'react';

import classes from './OrderSummary.css';
import Button from '../../UI/Button/Button';

class OrderSummary extends Component {
    componentDidUpdate() {
        
    }

  render() {
    const ingredientSummary = Object
      .keys(this.props.ingredients)
      .map(igKey => {
        return <p key={igKey}>
          <span style={{
            textTransform: 'capitalize'
          }}>
            {igKey}
          </span>
          : {this.props.ingredients[igKey]}
        </p>;
      });

    return (
      <div className={classes.OrderSummary}>
        <h3>You Order</h3>
        <p>Burger with ingredients:
        </p>
        {ingredientSummary}
        <p>Continue to checkout?</p>
        <Button btnType="Danger" clicked={this.props.purchaseCancelled}>CANCEL</Button>
        <Button btnType="Success" clicked={this.props.purchaseContinued}>CONTINUE</Button>
      </div>
    );
  }
 };

export default OrderSummary;