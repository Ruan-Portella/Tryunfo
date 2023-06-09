import React from 'react';
import Proptypes from 'prop-types';
import Card from './Card';
import '../css/filtercards.css';

class Filter extends React.Component {
  render() {
    const { card, onClick } = this.props;

    const { cardName,
      cardDescription,
      cardAttr1, cardAttr2,
      cardAttr3, cardImage,
      cardRare, cardTrunfo } = card;
    return (
      <section id="cardsfilter">
        <Card
          cardName={ cardName }
          cardDescription={ cardDescription }
          cardAttr1={ cardAttr1 }
          cardAttr2={ cardAttr2 }
          cardAttr3={ cardAttr3 }
          cardImage={ cardImage }
          cardRare={ cardRare }
          cardTrunfo={ cardTrunfo }
        />
        <button
          data-testid="delete-button"
          type="button"
          id="buttomDelete"
          className={ cardName }
          onClick={ onClick }
        >
          Excluir
        </button>
      </section>
    );
  }
}

Filter.propTypes = {
  card: Proptypes.string.isRequired,
  onClick: Proptypes.func.isRequired,
};

export default Filter;
