import React from 'react';
import Card from './components/Card';
import Filter from './components/FilterCards';
import Form from './components/Form';
import './css/app.css';

const INITIAL_STATE = {
  cardName: '',
  cardDescription: '',
  cardAttr1: 0,
  cardAttr2: 0,
  cardAttr3: 0,
  cardImage: 'https://i.imgur.com/Cp0dBW8.png',
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
      ? target.checked : target.value;

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
      cardImage: 'https://i.imgur.com/Cp0dBW8.png',
      cardRare: '',
    }));
    if (cardTrunfo) {
      this.setState({ hasTrunfo: true, cardTrunfo: false });
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
      <div id="mainconteudo">
        <div>
          <img width="300px" height="240px" id="image-Header" src="https://i.imgur.com/Cp0dBW8.png" alt="Imagem Logo" />
        </div>
        <section id="main-content">
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
          <section id="card-content">
            <h2 id="h2-card">Pré Visualização</h2>
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
          </section>
        </section>
        {/* <h2>TODAS AS CARTAS</h2> */}
        <section id="filtercards">
          <p id="filterName">Filtros de Busca</p>
          <input
            type="text"
            name="FilterName"
            id="filterNameText"
            onChange={ this.filterName }
            data-testid="name-filter"
            placeholder="Filtrar Por Nome"
            disabled={ filterDisable }
          />
          <select
            data-testid="rare-filter"
            id="filterRare"
            onChange={ this.filterRare }
            disabled={ filterDisable }
          >
            <option>todas</option>
            <option>normal</option>
            <option>raro</option>
            <option>muito raro</option>
          </select>
          <section id="checkbox">
            <label htmlFor="Tryunfo" data-testid="trunfo-filter">
              <input
                id="Tryunfo"
                type="checkbox"
                onChange={ this.filterTryunfo }
              />
              Super Trybe Trunfo
            </label>
          </section>
        </section>
        <section id="mainCardsConten">
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
        </section>
      </div>
    );
  }
}

export default App;
