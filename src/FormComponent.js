import React, { useState } from 'react';


function FormComponent() {

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState("");
    const [addButton, setAddButton] = useState(true);


    const onTitleChange = e => setTitle(e.target.value);
    const onDescriptionChange = e => setDescription(e.target.value);
    const onPriceChange = e => setPrice(e.target.value);


    // const useCounter = () => {
    //     const [count, setCount] = useState(0);
    //     const inc = useCallback(() => setCount(c => c + 1), []);
    //     const dec = useCallback(() => setCount(c => c - 1), []);
    //     return {
    //       count,
    //       inc,
    //       dec
    //     };
    //   };

    const handleSubmit = (e) => {
        e.preventDefault();
        setAddButton(true);
    
        const newProduct = { title, description, price};
        const requestOptions = {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(newProduct)
          };
        fetch("https://localhost:44355/api/Product", requestOptions)
            .then(response => response.json())
            .then(res => {
                console.log("RES",res);
        });
        // window.location.reload();
      };

    return(
        <div>
             {addButton ? <button onClick={() => setAddButton(false)}>Add products</button> :
             <form>
                <input type='text' placeholder='Title' value={title} onChange={onTitleChange} required/>
                <input type='text' placeholder='Description' value={description} onChange={onDescriptionChange} required/>
                <input type='number' placeholder='Price' value={price} onChange={onPriceChange} required/>
                <button type='submit' onClick={handleSubmit}>Add Product</button>
            </form>
            }
        </div>
    );
}

export default FormComponent;