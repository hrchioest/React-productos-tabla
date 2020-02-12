import React, {useState} from 'react';
import Inputs from './components/Inputs/Inputs';
import Table from './components/Table/Table';
import './App.css';





function App() {

  const [productos, setProductos] = useState ([]);

  const deleteId = id => {
    const arr = [...productos];
    const index = arr.findIndex(producto => producto.id == id);
    arr.splice(index, 1);
    setProductos(arr);
  }

  return (
    <div>
      <Table deleteId={deleteId} productos ={productos} ></Table>
      <Inputs newProductos={setProductos} productos={productos}></Inputs>
    </div>
  );
}

export default App;
