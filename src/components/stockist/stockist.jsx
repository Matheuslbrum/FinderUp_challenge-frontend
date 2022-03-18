import React, { useEffect, useState } from 'react';
import api from '../../services/api';
import MaterialItem from '../materialItem/materialItem';
import '../../styles/stockist.css';

const Stockist = (props) => {
    const {
      user,
    } = props;

    const [state, setState] = useState({ name: '', quantity: '' });

    const handleInput = (event) => {
        const {
          value,
          name,
        } = event.target;

        setState((prevState) => ({ ...prevState, [name]: value, user }));
      };

      const handleSubmit = async (event) => {
        event.preventDefault();

        await api.post('rawMaterials', {
            ...state,
        }).then((response) => {
            alert(response);
          })
          .catch((error) => {
            alert(error);
          });
        };

    return (
      <div className="stockist">
        <form onSubmit={handleSubmit} className="stockist_form">
          <label htmlFor="name" className="stockist__label">
            Digite o nome do produto:
            <input
              type="text"
              onChange={handleInput}
              name="name"
              id="name"
            />
          </label>
          <label htmlFor="quantity" className="stockist__label">
            Escreva a quantidade:
            <input
              type="number"
              onChange={handleInput}
              name="quantity"
              id="quantity"
            />
          </label>
          <input
            type="submit"
          />
        </form>
      </div>
    );
};
export default Stockist;
