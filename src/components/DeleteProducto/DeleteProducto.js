import React, {useState} from 'react'; 

const DeleteProducto = ({newProductos, productos}) => {

    






    return (
    
        <div className="box-add">
            <h2>Delete producto</h2>
                <div className="space-add">
                    <input id ="inputId" className ="input-id" onChange={getId} placeholder ="id"></input>
                    <input id = "inputName" className ="input-name" onChange={getName} placeholder ="name"></input>
                    <input id = "inputMake"className ="input-make" onChange={getMake} placeholder ="make"></input>
                    <input id = "inputPrice" className ="input-price" onChange={getPrice} placeholder ="price"></input>
                </div>
                <button className="add" onClick ={addProducts}>ADD</button>
        </div>
    
    );
}
