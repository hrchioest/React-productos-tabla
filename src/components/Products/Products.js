import React, {useState, useEffect} from 'react'; 
import Table from '../Table/Table';
import './Products.scss';



const Productos = props =>{

    const [productos, setProductos] = useState ([{
        id:1,
        name:'perfume',
        make:'Ck',
        price:600
    }]);

    const addProducts = () => {
       let inputId = document.querySelector('#inputId').value;
       let inputName = document.querySelector('#inputName').value;
       let inputMake = document.querySelector('#inputMake').value;
       let inputPrice = document.querySelector('#inputPrice').value;

       const newProductos = {
           id: inputId,
           name: inputName,
           make: inputMake,
           price: inputPrice
       }
       setProductos([...productos, newProductos]);
    }

    

    return (
 
        <div>
            <Table productos ={productos}></Table>
            <div className="box-add">
                <h2>Agregar productos</h2>
                <div className="space-add">
                    <input id ="inputId" className ="input-id" placeholder ="id"></input>
                    <input id = "inputName" className ="input-name" placeholder ="name"></input>
                    <input id = "inputMake"className ="input-make" placeholder ="make"></input>
                    <input id = "inputPrice" className ="input-price" placeholder ="price"></input>
                </div>
                <button className="add" onClick ={addProducts}>ADD</button>
            </div>
    
        </div>
        
    )
}




export default Productos;