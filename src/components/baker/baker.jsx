import React, { Fragment, useEffect, useState } from 'react';
import api from '../../services/api';
import MaterialItem from '../materialItem/materialItem';
import Table from '../table/table';
import '../../styles/baker.css';

const Baker = (props) => {
  const {
    user,
  } = props;

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

    if (id && quantity) {
      await api.put(`/rawMaterials/${id}/request`, {
        quantity,
        user,
      })
      .then((response) => alert(response))
      .catch((error) => alert(error));
    }
  };

  useEffect(() => {
    api.get('rawMaterials', {
      params: {
        ...state,
      },
    }).then(({ data }) => {
      setMaterials(data);
    }).catch((error) => alert(error));
  }, [state]);

  return (
    <div className="baker">
      <form className="baker_form">
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
           <React.Fragment>
             {
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
                baker
              />
            ))
            }
             <button type="submit" onClick={sendModifications} className="baker__button"> Enviar </button>
           </React.Fragment>
          )

      }
      </Table>
    </div>
  );
};

export default Baker;
