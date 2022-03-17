import React, { Children, useEffect } from 'react';

function Table(props) {
    const {
        profession,
        createdDate,
        children,
    } = props;

    return (
      <div className="table">
        <ul className="header-table">
          <li>
            Nome do produto
          </li>

          <li>
            Quantidade
          </li>
          {
           profession === 'Baker'
           && (
           <li>
             Padeiro
           </li>
            )
          }
          {
            profession === 'Stockist'
           && (
           <li>
             Estoquista
           </li>
            )
          }
          {
            createdDate
            && (
            <li>
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

export default React.memo(Table);
