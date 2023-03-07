import React from 'react';
import Card from './components/Card';
import Filter from './components/FilterCards';
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
  filterName: '',
  filterRare: '',
  filterTryunfo: false,
  filterDisable: false,
};

class App extends React.Component {
  constructor() {
    super();

    this.onInputChange = this.onInputChange.bind(this);
    this.validate = this.validate.bind(this);
    this.onSaveButtonClick = this.onSaveButtonClick.bind(this);
    this.dellCard = this.dellCard.bind(this);

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

  filterName = ({ target }) => {
    this.setState({ filterName: target.value });
  };

  filterRare = ({ target }) => {
    if (target.value === 'todas') {
      this.setState({ filterRare: '' });
    }
    this.setState({ filterRare: target.value });
  };

  filterTryunfo = ({ target }) => {
    const value = target.type === 'checkbox' ? target.checked : target.value;
    if (value) {
      this.setState({ filterTryunfo: true, filterDisable: true });
    } else {
      this.setState({ filterTryunfo: false, filterDisable: false });
    }
  };

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

  dellCard({ target }) {
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
      hasTrunfo, cards, filterName, filterRare,
      filterTryunfo, filterDisable } = this.state;

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
        <input
          type="text"
          name="FilterName"
          onChange={ this.filterName }
          data-testid="name-filter"
          placeholder="Filtrar Por Nome"
          disabled={ filterDisable }
        />
        <select
          data-testid="rare-filter"
          onChange={ this.filterRare }
          disabled={ filterDisable }
        >
          <option>todas</option>
          <option>normal</option>
          <option>raro</option>
          <option>muito raro</option>
        </select>
        <label htmlFor="Tryunfo" data-testid="trunfo-filter">
          Super Trynufo
          <input
            id="Tryunfo"
            type="checkbox"
            onChange={ this.filterTryunfo }
          />
        </label>
        {cards.filter((card) => {
          if (filterTryunfo === true) {
            return card.cardTrunfo;
          }
          if (filterRare === 'todas') {
            return this.filterRare;
          } if (filterRare !== '') {
            return card.cardRare === filterRare;
          }
          return card.cardName.includes(filterName);
        })
          .map((card) => (
            <Filter
              key={ card.cardName }
              card={ card }
              onClick={ this.dellCard }
            />
          ))}
      </div>
    );
  }
}

export default App;
