import React from 'react';
import Card from './components/Card';
import Form from './components/Form';

const INITIAL_STATE = {
  cardName: '',
  cardDescription: '',
  cardAttr1: 0,
  cardAttr2: 0,
  cardAttr3: 0,
  cardImage: '',
  cardRare: '',
  cardTrunfo: false,
  hasTrunfo: false,
  cards: [],
  button: false,
};

class App extends React.Component {
  constructor() {
    super();

    this.onInputChange = this.onInputChange.bind(this);
    this.validate = this.validate.bind(this);
    this.onSaveButtonClick = this.onSaveButtonClick.bind(this);
    this.deleteCard = this.deleteCard.bind(this);

    this.state = INITIAL_STATE;
  }

  onInputChange({ target }) {
    const { name } = target;

    const value = (target.type === 'checkbox')
      ? 'checked' : target.value;

    this.setState((previousState) => ({
      ...previousState,
      [name]: value,
    }));
  }

  onSaveButtonClick(card) {
    const { cardTrunfo } = this.state;
    this.setState((previousState) => ({
      cards: [...previousState.cards, card],
      cardName: '',
      cardDescription: '',
      cardAttr1: 0,
      cardAttr2: 0,
      cardAttr3: 0,
      cardImage: '',
      cardRare: '',
      cardTrunfo: false,
      hasTrunfo: false,
    }));
    if (cardTrunfo === 'checked') {
      this.setState({ hasTrunfo: true });
    }
  }

  validate() {
    const { cardName, cardDescription, cardAttr1, cardAttr2,
      cardAttr3, cardImage, cardRare } = this.state;

    const sum = 210;
    const max = 90;
    const card01 = Number(cardAttr1);
    const card02 = Number(cardAttr2);
    const card03 = Number(cardAttr3);

    const validateButton = cardName.length > 0
      && cardDescription.length > 0
      && cardImage.length > 0
      && cardRare.length > 0
      && card01 + card02 + card03 <= sum
      && card01 <= max
      && card02 <= max
      && card03 <= max
      && card01 >= 0
      && card02 >= 0
      && card03 >= 0;

    return !validateButton;
  }

  deleteCard({ target }) {
    const { cards } = this.state;
    const FindCard = cards
      .find((card) => card.cardName === target.className);
    if (FindCard.cardTrunfo) {
      this.setState({ hasTrunfo: false });
    }
    const newCards = cards.filter((card) => card !== FindCard);
    this.setState(() => ({
      cards: newCards,
    }));
  }

  render() {
    const { cardName, cardDescription, cardAttr1, cardAttr2,
      cardAttr3, cardImage, cardRare, cardTrunfo,
      hasTrunfo, cards } = this.state;

    return (
      <div>
        <h1>Tryunfo</h1>
        <Form
          cardName={ cardName }
          cardDescription={ cardDescription }
          cardAttr1={ cardAttr1 }
          cardAttr2={ cardAttr2 }
          cardAttr3={ cardAttr3 }
          cardImage={ cardImage }
          cardRare={ cardRare }
          cardTrunfo={ cardTrunfo }
          hasTrunfo={ hasTrunfo }
          onInputChange={ this.onInputChange }
          isSaveButtonDisabled={ this.validate() }
          onSaveButtonClick={ this.onSaveButtonClick }
        />
        <Card
          cardName={ cardName }
          cardDescription={ cardDescription }
          cardAttr1={ cardAttr1 }
          cardAttr2={ cardAttr2 }
          cardAttr3={ cardAttr3 }
          cardImage={ cardImage }
          cardRare={ cardRare }
          cardTrunfo={ cardTrunfo }
          hasTrunfo={ hasTrunfo }
        />
        {cards.map((card) => (
          <div key={ `${card.cardName} div` }>
            <Card
              key={ card.cardName }
              cardName={ card.cardName }
              cardDescription={ card.cardDescription }
              cardAttr1={ card.cardAttr1 }
              cardAttr2={ card.cardAttr2 }
              cardAttr3={ card.cardAttr3 }
              cardImage={ card.cardImage }
              cardRare={ card.cardRare }
              cardTrunfo={ card.cardTrunfo }
            />
            <button
              data-testid="delete-button"
              type="button"
              className={ card.cardName }
              onClick={ this.deleteCard }
            >
              Excluir
            </button>
          </div>))}
      </div>
    );
  }
}

export default App;
