import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../../services/api';
import '../../styles/registerPage.css';

const RegisterPage = () => {
    const stateDefault = { username: '', profession: '', email: '' };
    const [state, setState] = useState(stateDefault);
    const history = useNavigate();

    const handleSubmit = async (event) => {
      event.preventDefault();

       await api.post('register', {
           ...state,
       }).then(({ data }) => {
           alert(data);
         })
         .catch((error) => {
          alert(error);
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
        history('/');
    };

    return (
      <div className="registerPage">
        <div className="registerPage-conteiner">
          <form onSubmit={handleSubmit} className="registerPage-inputsConteiner">
            <label htmlFor="username" className="registerPage__label">
              Digite seu nome
              <input
                id="username"
                type="text"
                onChange={handleInput}
                name="username"
                className="registerPage__input"
              />
            </label>
            <label htmlFor="email" className="registerPage__label">
              Digite seu email
              <input
                id="email"
                type="email"
                onChange={handleInput}
                name="email"
                className="registerPage__input"
              />
            </label>
            <select name="profession" id="register" onChange={handleInput} className="registerPage__select">
              <option value="" className="registerPage__option">Selecione uma profissão</option>
              <option value="Baker" className="registerPage__option">Padeiro</option>
              <option value="Manager" className="registerPage__option">Gerente</option>
              <option value="Stockist" className="registerPage__option">Estoquista</option>
            </select>
            <input
              type="submit"
              className="registerPage__button"
            />
          </form>
          <div className="registerPage__contain-button">
            <button
              onClick={buttonClick}
              type="submit"
              className="registerPage__button init"
            >
              Página Inicial
            </button>
          </div>
        </div>
      </div>
    );
};
export default RegisterPage;
