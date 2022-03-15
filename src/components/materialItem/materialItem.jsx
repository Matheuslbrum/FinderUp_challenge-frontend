import React, { useEffect } from 'react';

function MaterialItem(props) {
    const {
        name,
        quantity,
        user,
        createdDate,
    } = props;

    return (
      <React.Fragment>
        <li>{name}</li>
        <li>{quantity}</li>
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
