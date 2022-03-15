import React, { useEffect, useState } from 'react';
import api from '../../services/api';
import MaterialItem from '../../components/materialItem/materialItem';
import Table from '../../components/table/table';

const ManagerPage = (props) => {
  const [state, setState] = useState({});
  const [materials, setMaterials] = useState([]);

  const handleInput = (event) => {
    const {
      value,
      name,
    } = event.target;

    setState({ [name]: value });
  };

  useEffect(() => {
    api.get('rawMaterials', {
      params: {
        ...state,
      },
    }).then(({ data }) => {
      setMaterials(data);
      console.log(materials);
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
        materialItem={
            materials.map((material) => {
                return (
                  <MaterialItem
                    name={material.name}
                    quantity={material.quantity}
                    user={material.user_updater}
                    createdDate={material.created_date}
                  />
                );
            })
         }
        user="Baker"
      />
    </div>
  );
};

export default ManagerPage;
