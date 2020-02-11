import React, {useState} from 'react'; 


const AddProducto = ({newProductos, productos}) => {

    const addProducts = () =>{
        const newProducto = {
            id,
            name,
            make,
            price,
        }
        newProductos([...productos, newProducto]);
    }

    const [id, setId] = useState();
    const [name, setName] = useState();
    const [make, setMake] = useState();
    const [price, setPrice] = useState();

    const getId = event =>{
        setId(event.target.value);
    }
    const getName = event =>{
        setName(event.target.value);
    }
    const getMake = event =>{
        setMake(event.target.value);
    }
    const getPrice = event =>{
        setPrice(event.target.value);
    }


    
    return (
    
        <div className="box-add">
            <h2>Add producto</h2>
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

export default AddProducto;