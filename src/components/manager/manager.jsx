import React, { useEffect, useState } from 'react';
import api from '../../services/api';
import Baker from '../baker/baker';
import MaterialItem from '../materialItem/materialItem';
import Table from '../table/table';

const Manager = (props) => {
  const [state, setState] = useState({});
  const [materials, setMaterials] = useState([]);

  const handleInput = (event) => {
    const {
      value,
      name,
    } = event.target;

    setState({ [name]: value });

    if (!value) {
      setState({});
      setMaterials([]);
    }
  };

  useEffect(() => {
    api.get('rawMaterials', {
      params: {
        ...state,
      },
    }).then(({ data }) => {
      setMaterials(data);
    }).catch((error) => console.log(error));
  }, [state]);

  return (
    <div>
      <form onChange={handleInput}>
        <label htmlFor="user">
          <input
            type="text"
            onChange={handleInput}
            name="user"
            id="user"
          />
          Digite o nome do padeiro
        </label>
      </form>
      <Table
        profession="Baker"
        createdDate
      >
        {
          materials?.map((material) => (
            <MaterialItem
              key={material.id}
              name={material.name}
              quantity={material.quantity}
              user={material.user_updater}
              createdDate={material.created_date}
            />
            ))
      }
      </Table>
    </div>
  );
};

export default Manager;
