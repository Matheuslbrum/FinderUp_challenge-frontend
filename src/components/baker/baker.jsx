import React, { useEffect, useState } from 'react';
import api from '../../services/api';
import MaterialItem from '../materialItem/materialItem';
import Table from '../table/table';

const Baker = () => {
  const defaultItem = { id: '', quantity: '' };

  const [state, setState] = useState({});
  const [materials, setMaterials] = useState([]);
  const [item, setItem] = useState(defaultItem);
  const [isDisable, setIsDisable] = useState(true);

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

  const sendModifications = async () => {
    const {
      id,
      quantity,
    } = item;

    console.log(id, quantity);

    if (id && quantity) {
      await api.put(`/rawMaterials/${id}/request`, {
        quantity,
        user: 'TestePadeiro',
      })
      .then((response) => console.log(response))
      .catch((error) => console.log(error));
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

    console.log(materials);
  }, [state]);

  return (
    <div>
      <form>
        <label htmlFor="name">
          Digite o nome do Produto
          <input
            type="text"
            onChange={handleInput}
            name="name"
            id="name"
          />
        </label>
      </form>
      <Table
        profession="Stockist"
      >
        {
           materials.length > 0
           && (
          materials?.map((material) => (
            <MaterialItem
              item={item}
              setIsDisable={setIsDisable}
              isDisable={isDisable}
              key={material.id}
              setItem={setItem}
              id={material.id}
              name={material.name}
              quantity={material.quantity}
              user={material.user}
            />
            ))
          )
      }
      </Table>
      <button type="submit" onClick={sendModifications}> Enviar </button>
    </div>
  );
};

export default Baker;
