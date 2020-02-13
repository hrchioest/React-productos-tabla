import React, {useState, useRef} from 'react'; 
import './inputs.scss'

const Inputs = ({newProductos, productos}) => {

    // const addProducts = () =>{
    //     const newProducto = {
    //         id,
    //         name,
    //         make,
    //         price,
    //     }
    //     newProductos([...productos, newProducto]);
    // }

    // const [id, setId] = useState();
    // const [name, setName] = useState();
    // const [make, setMake] = useState();
    // const [price, setPrice] = useState();

    // const getId = event =>{
    //     setId(event.target.value);
    // }
    // const getName = event =>{
    //     setName(event.target.value);
    // }
    // const getMake = event =>{
    //     setMake(event.target.value);
    // }
    // const getPrice = event =>{
    //     setPrice(event.target.value);
    // }

    const refForm = useRef();

    const [data, setData] = useState({
        id: null,
        name: null,
        make: null,
        price: null
    });

    const setDataInput = event => {
        const { name , value } = event.target;
        // console.log(name, value, {...data, [name]: value});
        setData({...data, [name]: value});
    };

    const addProducts = () => {
        newProductos([...productos, data]);
        refForm.current.reset();
    }
    

    const editProducts = ()=> { 
        const arr = [...productos];
        const index = arr.findIndex(producto => producto.id == data.id);
        arr.splice(index, 1, data);
        newProductos(arr);
        refForm.current.reset();
    }



    return (
        
        <div className="box-add">
            <form ref={refForm} onSubmit={e => e.preventDefault()}>
                <h2> Add && Edit </h2>
                    <div className="space-add">
                        <input id="inputId" name="id" className ="input-id" onChange={setDataInput} placeholder ="id"></input>
                        <input id="inputName" name="name" className ="input-name" onChange={setDataInput} placeholder ="name"></input>
                        <input id="inputMake" name="make" className ="input-make" onChange={setDataInput} placeholder ="make"></input>
                        <input id="inputPrice" name="price" className ="input-price" onChange={setDataInput} placeholder ="price"></input>
                    </div>
                <button className="add" onClick ={addProducts}>ADD</button>
                <button className="edit" onClick ={editProducts}>EDIT</button>
            </form>
         </div>
         
    );
}

export default Inputs;