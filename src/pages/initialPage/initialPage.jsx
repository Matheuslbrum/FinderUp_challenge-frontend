import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../../services/api';
import Stockist from '../../components/stockist/stockist';
import Manager from '../../components/manager/manager';
import Baker from '../../components/baker/baker';

const InitialPage = () => {
    const stateDefault = { username: '', profession: '', email: '' };
    const history = useNavigate();
    const [state, setState] = useState(stateDefault);
    const [errorApi, setErrorApi] = useState();

    const {
        username,
        profession,
        email,
    } = state;

    const handleSubmit = async (event) => {
      event.preventDefault();

       await api.post('login', {
           ...state,
       }).then((response) => {
           console.log(response);
         })
         .catch((error) => {
           console.log(error);
           setErrorApi(error);
         });
      };

    const handleInput = (event) => {
        const {
          value,
          name,
        } = event.target;

        setState((prevState) => ({ ...prevState, [name]: value }));
      };

    const buttonClick = () => {
        history('/register');
    };

      useEffect(() => {
       console.log(state);
      }, [state]);

    return (
      <div>
        <form onSubmit={handleSubmit}>
          <label htmlFor="username">
            Digite seu nome:
            <input
              id="username"
              type="text"
              onChange={handleInput}
              name="username"
            />
          </label>
          <label htmlFor="email">
            Digite seu email:
            <input
              id="email"
              type="email"
              onChange={handleInput}
              name="email"
            />
          </label>
          <label htmlFor="login">
            Selecione sua profissão:
            <select name="profession" id="login" onChange={handleInput}>
              <option value="">Selecione uma profissão</option>
              <option value="Baker">Padeiro</option>
              <option value="Manager">Gerente</option>
              <option value="Stockist">Estoquista</option>
            </select>
          </label>
          <input
            type="submit"
          />
        </form>
        {
            profession === 'Manager' && !errorApi
            && (
            <Manager />
            )
        }
        {
            profession === 'Baker' && !errorApi
            && (
            <Baker />
            )
        }
        {
            profession === 'Stockist' && !errorApi
            && (
            <Stockist />
            )
        }
        {
            errorApi
            && (
            <p>Erro de login</p>
            )
        }
        <div>
          <button
            onClick={buttonClick}
            type="submit"
          >
            Register
          </button>
        </div>
      </div>
    );
};
export default InitialPage;
