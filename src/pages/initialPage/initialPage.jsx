import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../../services/api';
import Stockist from '../../components/stockist/stockist';
import Manager from '../../components/manager/manager';
import Baker from '../../components/baker/baker';
import '../../styles/initialPage.css';

const InitialPage = () => {
    const stateDefault = { username: '', profession: '', email: '' };
    const history = useNavigate();
    const [state, setState] = useState(stateDefault);
    const [errorApi, setErrorApi] = useState();
    const [isLogged, setIsLogged] = useState();
    const [loggedUsername, setLoggedUsername] = useState('');

    const {
      profession,
    } = state;

    const handleSubmit = async (event) => {
      event.preventDefault();

       await api.post('login', {
           ...state,
       }).then(({ data }) => {
        setIsLogged(data);
        alert(data.status);
         })
         .catch((error) => {
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

    return (
      <div className="initialPage">
        <div className="initialPage__forms-table">
          <form onSubmit={handleSubmit} className="initialPage__form">
            <label htmlFor="username" className="initialPage__label">
              Digite seu nome:
              <input
                id="username"
                type="text"
                onChange={handleInput}
                name="username"
              />
            </label>
            <label htmlFor="email" className="initialPage__label">
              Digite seu email:
              <input
                id="email"
                type="email"
                onChange={handleInput}
                name="email"
              />
            </label>
            <select name="profession" id="login" onChange={handleInput} className="initialPage__select">
              <option value="">Selecione uma profissão</option>
              <option value="Baker">Padeiro</option>
              <option value="Manager">Gerente</option>
              <option value="Stockist">Estoquista</option>
            </select>
            <input
              type="submit"
            />
          </form>
        </div>
        {
            profession === 'Manager' && isLogged && !errorApi
            && (
              <div className="profession_component">
                <Manager />
              </div>
            )
        }
        {
            profession === 'Baker' && isLogged && !errorApi
            && (
              <div className="profession_component">
                <Baker user={loggedUsername} />
              </div>
            )
        }
        {
            profession === 'Stockist' && isLogged && !errorApi
            && (
              <div className="profession_component">
                <Stockist user={loggedUsername} />
              </div>
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
            className="initialPage__button"
          >
            Registrar
          </button>
        </div>
      </div>
    );
};
export default InitialPage;
