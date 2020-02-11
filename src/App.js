import React, {useState} from 'react';
import AddProducto from './components/AddProducto/AddProducto';
import Table from './components/Table/Table';
import './App.css';




function App() {
  const [productos, setProductos] = useState ([{
    id:1,
    name:'perfume',
    make:'Ck',
    price:600
}]);

const deleteId = id => {
  const arr = [...productos];
  const getId = arr.findIndex(producto => producto.id == id);
  arr.splice(getId, 1);
  setProductos(arr);
}
  return (
    <div>
      <Table deleteId={deleteId} productos ={productos} ></Table>
      <AddProducto newProductos={setProductos} productos={productos}></AddProducto>
    </div>
     
  );
}

export default App;
