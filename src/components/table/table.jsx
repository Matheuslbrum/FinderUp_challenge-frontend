import React, { Children, useEffect } from 'react';
import '../../styles/table.css';

function Table(props) {
    const {
        profession,
        createdDate,
        children,
    } = props;

    return (
      <div className="table">
        <ul className="header-table">
          <li className="table__item">
            Nome do produto
          </li>

          <li className="table__item">
            Quantidade
          </li>
          {
           profession === 'Baker'
           && (
           <li className="table__item">
             Padeiro
           </li>
            )
          }
          {
            profession === 'Stockist'
           && (
           <li className="table__item">
             Estoquista
           </li>
            )
          }
          {
            createdDate
            && (
            <li className="table__item">
              Data da Remoção
            </li>
            )
          }
        </ul>
        <ul className="table-itens">
          {children}
        </ul>
      </div>
    );
}

export default Table;
