import React from 'react';
import Proptypes from 'prop-types';

class Card extends React.Component {
  render() {
    const { cardName,
      cardDescription,
      cardAttr1, cardAttr2,
      cardAttr3, cardImage, cardRare,
      cardTrunfo } = this.props;
    return (
      <section>
        <h2 data-testid="name-card">{cardName}</h2>
        <img src={ cardImage } alt={ cardName } data-testid="image-card" />
        <p data-testid="description-card">{cardDescription}</p>
        <span data-testid="attr1-card">{cardAttr1}</span>
        <span data-testid="attr2-card">{cardAttr2}</span>
        <span data-testid="attr3-card">{cardAttr3}</span>
        <span data-testid="rare-card">{cardRare}</span>
        {
          cardTrunfo && <span data-testid="trunfo-card">Super Trunfo</span>
        }
      </section>
    );
  }
}

Card.propTypes = {
  cardName: Proptypes.string.isRequired,
  cardDescription: Proptypes.string.isRequired,
  cardAttr1: Proptypes.number.isRequired,
  cardAttr2: Proptypes.number.isRequired,
  cardAttr3: Proptypes.number.isRequired,
  cardImage: Proptypes.string.isRequired,
  cardRare: Proptypes.string.isRequired,
  cardTrunfo: Proptypes.bool.isRequired,
};

export default Card;
