import React from 'react';
import Proptypes from 'prop-types';

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
      <form>
        <label htmlFor="cardName">
          Nome
          <input
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
          Descrição
          <input
            type="textarea"
            id="cardDescription"
            name="cardDescription"
            value={ cardDescription }
            onChange={ onInputChange }
            data-testid="description-input"
            placeholder="Insira a Descrição da Carta"
          />
        </label>
        <label htmlFor="cardAttr1">
          Attr01
          <input
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
          Attr02
          <input
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
          Attr03
          <input
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
          Imagem
          <input
            type="text"
            id="cardImagem"
            name="cardImagem"
            value={ cardImage }
            onChange={ onInputChange }
            data-testid="image-input"
            placeholder="Insira a imagem da Carta"
          />
        </label>
        <label htmlFor="cardRare">
          Raridade
          <select
            id="cardRare"
            name="cardRare"
            value={ cardRare }
            onChange={ onInputChange }
            data-testid="rare-input"
          >
            <option value="normal">normal</option>
            <option value="raro">raro</option>
            <option value="muito raro">muito raro</option>
          </select>
        </label>
        <label htmlFor="cardTrunfo">
          Super Trunfo
          <input
            type="checkbox"
            id="cardTrunfo"
            name="cardTrunfo"
            checked={ cardTrunfo }
            onChange={ onInputChange }
            data-testid="trunfo-input"
          />
        </label>
        <label htmlFor="onSaveButtonClick">
          <button
            disabled={ isSaveButtonDisabled }
            onClick={ onSaveButtonClick }
            name="onSaveButtonClick"
            type="submit"
            data-testid="save-button"
          >
            Salvar
          </button>
        </label>
      </form>

    );
  }
}

Form.propTypes = {
  cardName: Proptypes.string.isRequired,
  cardDescription: Proptypes.string.isRequired,
  cardAttr1: Proptypes.string.isRequired,
  cardAttr2: Proptypes.string.isRequired,
  cardAttr3: Proptypes.string.isRequired,
  cardImage: Proptypes.string.isRequired,
  cardRare: Proptypes.string.isRequired,
  cardTrunfo: Proptypes.bool.isRequired,
  hasTrunfo: Proptypes.bool.isRequired,
  isSaveButtonDisabled: Proptypes.bool.isRequired,
  onInputChange: Proptypes.func.isRequired,
  onSaveButtonClick: Proptypes.func.isRequired,
};

export default Form;
