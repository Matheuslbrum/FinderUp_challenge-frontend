import React, { useEffect, useState } from 'react';
import '../../styles/materialItem.css';

function MaterialItem(props) {
    const {
        id,
        name,
        setItem,
        item,
        setIsDisable,
        isDisable,
        quantity,
        user,
        createdDate,
        baker,
    } = props;

const onDisable = (e) => {
  const {
    id: inputId,
    name: nameInput,
    value,
  } = e.target;

  setIsDisable(inputId);
  setItem({ [nameInput]: value });
};

const handleInput = (e) => {
  const {
    name: inputName,
    value,
  } = e.target;

  if (inputName === 'quantity') {
    const oldValue = quantity - value;
   setItem({ ...item, [inputName]: oldValue });
  }
};

    return (
      <div className="materialItem__rows">
        {
          baker
          && (
          <input id={id} type="radio" name="id" defaultValue={id} onChange={onDisable} className="materialItem__input" />
          )
        }
        <li className="materialItem__li">{name}</li>
        <li className="materialItem__li">
          <input id="quantity" name="quantity" className="materialItem__quantity" onChange={handleInput} defaultValue={quantity} disabled={isDisable === Number(id) ? false : true} />
        </li>
        <li className="materialItem__li">{user}</li>
        {
          createdDate
          && (
          <li className="materialItem__li">{createdDate}</li>
          )
        }
      </div>
    );
}

export default React.memo(MaterialItem);
