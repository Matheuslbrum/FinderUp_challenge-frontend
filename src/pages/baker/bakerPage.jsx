import React, { useEffect, useState } from 'react';
import api from '../../services/api';
import MaterialItem from '../../components/materialItem/materialItem';
import Table from '../../components/table/table';

const BakerPage = (props) => {
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
    }

    console.log(state);
  };

  useEffect(() => {
    api.get('rawMaterials', {
      params: {
        ...state,
      },
    }).then((response) => {
      setMaterials(response.data);
      console.log(response);
    }).catch((response, error) => console.log(response));
  }, [state]);

  return (
    <div>
      <form>
        <label htmlFor="name">
          <input
            type="text"
            onChange={handleInput}
            name="name"
            id="name"
          />
          Digite o nome do Produto
        </label>
      </form>
      <Table
        user="Stockist"
        materialItem={
        materials.map((material) => {
          return (
            <MaterialItem
              name={material.name}
              quantity={material.quantity}
              user={material.user_updater}
            />
           );
        })
      }
      />
    </div>
  );
};

export default BakerPage;
