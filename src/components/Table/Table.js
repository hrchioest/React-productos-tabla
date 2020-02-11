import React, {useState} from 'react'; 
import './Table.scss';
import '../AddProducto/AddProducto';


const Table = ({productos,deleteId, ...props}) => {

    
    
    return (
    <div>
        <h1 className="title">Lista de productos</h1>
        <table className ="table">
            <tr className ="filas">
                <th className ="fila">id</th>
                <th className ="fila">name</th>
                <th className ="fila">make</th>
                <th className ="fila">price</th>
                <th className ="fila">option</th>
            </tr>
            {productos.map(producto => {
                return(
                    <tr>
                        <td>{producto.id}</td>
                        <td>{producto.name}</td>
                        <td>{producto.make}</td>
                        <td>{producto.price}</td>
                        <td><button onClick={()=> deleteId(producto.id)} className="eliminar">{producto.eliminar}Delete</button></td>
                    </tr>
                )
            })}
        </table>
    </div>
    );

}

export default Table;