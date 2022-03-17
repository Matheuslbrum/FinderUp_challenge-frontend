import React, { useEffect, useState } from 'react';

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

useEffect(() => {
  console.log(item);
}, [item]);

    return (
      <React.Fragment>
        <input id={id} type="radio" name="id" defaultValue={id} onChange={onDisable} />
        <li>{name}</li>
        <li>
          <input id="quantity" name="quantity" onChange={handleInput} defaultValue={quantity} disabled={isDisable === id.toString() ? false : true} />
        </li>
        <li>{user}</li>
        {
          createdDate
          && (
          <li>{createdDate}</li>
          )
        }
      </React.Fragment>
    );
}

export default React.memo(MaterialItem);
