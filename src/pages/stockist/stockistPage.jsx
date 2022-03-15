import React, { useEffect, useState } from 'react';
import api from '../../services/api';
import MaterialItem from '../../components/materialItem/materialItem';

const StockistPage = () => {
    const [state, setState] = useState({ name: '', user: '', quantity: '' });

    const handleInput = (event) => {
        const {
          value,
          name,
        } = event.target;

        setState((prevState) => ({ ...prevState, [name]: value }));
      };

      useEffect(() => {
       console.log(state);
      }, [state]);

      const handleSubmit = async (event) => {
        event.preventDefault();

        await api.post('rawMaterials', {
            ...state,
        }).then((response) => {
            console.log(response);
          })
          .catch((error) => {
            console.log(error);
          });
        };

    return (
      <div>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            onChange={handleInput}
            name="name"
          />
          <input
            type="number"
            onChange={handleInput}
            name="quantity"
          />
          <input
            type="text"
            onChange={handleInput}
            name="user"
          />
          <input
            type="submit"
          />
        </form>
      </div>
    );
};
export default StockistPage;
