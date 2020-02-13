import React, {useState} from 'react'; 
import './Table.scss';
import '../Inputs/Inputs';


const Table = ({productos,deleteId, ...props}) => {
    return (
    <div>
        <h1 className="title">Lista de productos</h1>
        <table className ="table">
            <thead>
                <tr className ="filas">
                    <th className ="fila">id</th>
                    <th className ="fila">name</th>
                    <th className ="fila">make</th>
                    <th className ="fila">price</th>
                    <th className ="fila">option</th>
                </tr>
            </thead>
            <tbody>
            {productos.map(producto => {
                return(
                    <tr key={producto.id}>
                        <td>{producto.id}</td>
                        <td>{producto.name}</td>
                        <td>{producto.make}</td>
                        <td>{producto.price}</td>
                        <td><button onClick={()=> deleteId(producto.id)} className="eliminar">{producto.eliminar}Delete</button></td>
                    </tr>                    
                )
            })}
            </tbody>
        </table>
    </div>
    );

}

export default Table;