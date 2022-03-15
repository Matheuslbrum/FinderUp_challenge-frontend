import React, { Children, useEffect } from 'react';

function Table(props) {
    const {
        user,
        createdDate,
        materialItem,
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
           user === 'Baker'
           && (
           <li>
             Padeiro
           </li>
            )
          }
          {
            user === 'Stockist'
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
          {materialItem}
        </ul>
      </div>
    );
}

export default React.memo(Table);
