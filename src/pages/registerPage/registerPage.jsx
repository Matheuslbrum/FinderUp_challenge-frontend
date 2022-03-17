import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../../services/api';

const RegisterPage = () => {
    const stateDefault = { username: '', profession: '', email: '' };
    const [state, setState] = useState(stateDefault);
    const history = useNavigate();

    const handleSubmit = async (event) => {
      event.preventDefault();

       await api.post('register', {
           ...state,
       }).then((response) => {
           console.log(response);
         })
         .catch((error) => {
           console.log(error);
         });

      setState(stateDefault);
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

      useEffect(() => {
       console.log(state);
      }, [state]);

    return (
      <div>
        <form onSubmit={handleSubmit}>
          <label htmlFor="username">
            Digite seu nome
            <input
              id="username"
              type="text"
              onChange={handleInput}
              name="username"
            />
          </label>
          <label htmlFor="email">
            Digite seu email
            <input
              id="email"
              type="email"
              onChange={handleInput}
              name="email"
            />
          </label>
          <label htmlFor="register">
            <select name="profession" id="register" onChange={handleInput}>
              <option value="">Selecione uma profissão</option>
              <option value="Padeiro">Padeiro</option>
              <option value="Gerente">Gerente</option>
              <option value="Estoquista">Estoquista</option>
            </select>
          </label>
          <input
            type="submit"
          />
        </form>
        <div>
          <button
            onClick={buttonClick}
            type="submit"
          >
            Página Inicial
          </button>
        </div>
      </div>
    );
};
export default RegisterPage;
