import React from 'react';
import Proptypes from 'prop-types';
import '../css/card.css';

class Card extends React.Component {
  render() {
    const { cardName,
      cardDescription,
      cardAttr1, cardAttr2,
      cardAttr3, cardImage, cardRare,
      cardTrunfo } = this.props;
    return (
      <section id="cardContentSection">
        <section id="cardNameSection">
          <section id="cardColorSection">
            <h2
              id="cardcontentname"
              data-testid="name-card"
            >
              {cardName}

            </h2>
            <section id="imageTryunfo">
              <img
                id="imagecardSection"
                src={ cardImage }
                alt={ cardName }
                data-testid="image-card"
              />
              {
                cardTrunfo && <img
                  id="cardTrunfos"
                  data-testid="trunfo-card"
                  alt="Super Trunfo"
                  src="https://i.imgur.com/Cp0dBW8.png"
                />
              }
            </section>
            <span data-testid="rare-card" id="cardRareInput">{cardRare}</span>
            <p
              id="description"
              data-testid="description-card"
            >
              {cardDescription}

            </p>
            <section id="names">
              <section id="ataqueAttribute">
                <p id="ataque">Ataque</p>
                <p
                  id="attribute01"
                  data-testid="attr1-card"
                >
                  {cardAttr1}

                </p>
              </section>
              <section id="defesaAttribute">
                <p id="defesa">Defesa</p>
                <p id="attribute02" data-testid="attr2-card">{cardAttr2}</p>
              </section>
              <section id="magiaAttribute">
                <p id="magia">Magia</p>
                <p id="attribute03" data-testid="attr3-card">{cardAttr3}</p>
              </section>
            </section>
          </section>
        </section>
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
