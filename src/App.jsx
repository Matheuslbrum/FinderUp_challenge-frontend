import React, { useEffect, useState } from 'react';
import api from './services/api';

function App() {
  const [materials, setMaterials] = useState([]);

  useEffect(() => {
    api.get('rawMaterials', {
      params: {
        name: 'teste',
      },
    }).then(({ data }) => {
      setMaterials(data.materials);
    }).catch((error) => console.log(error));
  }, []);

  return (
    <div>
      <ul>
        {
         materials.map((material) => (
           <li key={material.id}>
             {material.id}
             {material.name}
             {material.quantity}
             {material.user}
             {material.create_at}
             {material.update_at}
           </li>
))
      }
      </ul>
    </div>
  );
}

export default App;
