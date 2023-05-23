import React from 'react';
import Proptypes from 'prop-types';
import '../css/form.css';

class Form extends React.Component {
  render() {
    const { cardName,
      cardDescription,
      cardAttr1, cardAttr2,
      cardAttr3, cardImage, cardRare,
      cardTrunfo, hasTrunfo,
      isSaveButtonDisabled, onInputChange,
      onSaveButtonClick } = this.props;
    return (
      <section id="form-content">
        <h2 id="title-form">ADICIONE NOVA CARTA</h2>
        <label htmlFor="cardName">
          <span id="nameCard">Nome</span>
          <input
            maxLength="20"
            type="text"
            id="cardName"
            name="cardName"
            value={ cardName }
            onChange={ onInputChange }
            data-testid="name-input"
            placeholder="Insira o nome da Carta"
          />
        </label>
        <label htmlFor="cardDescription">
          <span id="namedescription">Descrição</span>
          <textarea
            type="textarea"
            maxLength="35"
            id="cardDescription"
            name="cardDescription"
            value={ cardDescription }
            onChange={ onInputChange }
            data-testid="description-input"
            placeholder="Insira a Descrição da Carta"
          />
        </label>
        <label htmlFor="cardAttr1">
          <span id="attributecard">Ataque</span>
          <input
            min="1"
            max="90"
            type="number"
            id="cardAttr1"
            name="cardAttr1"
            value={ cardAttr1 }
            onChange={ onInputChange }
            data-testid="attr1-input"
            placeholder="Insira o Primeiro Atributo da Carta"
          />
        </label>
        <label htmlFor="cardAttr2">
          <span id="attributecard">Defesa</span>
          <input
            min="1"
            max="90"
            type="number"
            id="cardAttr2"
            name="cardAttr2"
            value={ cardAttr2 }
            onChange={ onInputChange }
            data-testid="attr2-input"
            placeholder="Insira o Segundo Atributo da Carta"
          />
        </label>
        <label htmlFor="cardAttr3">
          <span id="attributecard">Magia</span>
          <input
            min="1"
            max="90"
            type="number"
            id="cardAttr3"
            name="cardAttr3"
            value={ cardAttr3 }
            onChange={ onInputChange }
            data-testid="attr3-input"
            placeholder="Insira o Terceiro Atributo da Carta"
          />
        </label>
        <label htmlFor="cardImage">
          <span id="imagecard">Imagem</span>
          <input
            type="text"
            id="cardImage"
            name="cardImage"
            value={ cardImage }
            onChange={ onInputChange }
            data-testid="image-input"
            placeholder="Insira a imagem da Carta"
          />
        </label>
        <label htmlFor="cardRare">
          <span id="rarecard">Raridade</span>
          <select
            id="cardRare"
            name="cardRare"
            value={ cardRare }
            onChange={ onInputChange }
            data-testid="rare-input"
            required
          >
            <option value="normal">normal</option>
            <option value="raro">raro</option>
            <option value="muito raro">muito raro</option>
          </select>
        </label>
        <section id="trunfobuttom">
          <label htmlFor="cardTrunfo">
            {
              !hasTrunfo
                ? (
                  <p>
                    <input
                      type="checkbox"
                      id="cardTrunfo"
                      name="cardTrunfo"
                      checked={ cardTrunfo }
                      onChange={ onInputChange }
                      data-testid="trunfo-input"
                    />
                    Super Trunfo
                  </p>) : (<p>Você já tem um Super Trunfo em seu baralho</p>)
            }
          </label>
          <label htmlFor="onSaveButtonClick">
            <button
              disabled={ isSaveButtonDisabled }
              onClick={ () => onSaveButtonClick({
                cardName,
                cardDescription,
                cardAttr1,
                cardAttr2,
                cardAttr3,
                cardImage,
                cardRare,
                cardTrunfo,
                hasTrunfo,
              }) }
              name="onSaveButtonClick"
              type="submit"
              data-testid="save-button"
              id="buttonform"
            >
              Salvar
            </button>
          </label>
        </section>
      </section>

    );
  }
}

Form.propTypes = {
  cardName: Proptypes.string.isRequired,
  cardDescription: Proptypes.string.isRequired,
  cardAttr1: Proptypes.number.isRequired,
  cardAttr2: Proptypes.number.isRequired,
  cardAttr3: Proptypes.number.isRequired,
  cardImage: Proptypes.string.isRequired,
  cardRare: Proptypes.string.isRequired,
  cardTrunfo: Proptypes.bool.isRequired,
  hasTrunfo: Proptypes.bool.isRequired,
  isSaveButtonDisabled: Proptypes.bool.isRequired,
  onInputChange: Proptypes.func.isRequired,
  onSaveButtonClick: Proptypes.func.isRequired,
};

export default Form;
