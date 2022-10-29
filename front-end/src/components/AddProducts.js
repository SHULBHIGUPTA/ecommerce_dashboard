import React from 'react';

const AddProduct = () => {
    const [name, setName] = React.useState('')
    const [price, setPrice] =  React.useState('')
    const [category, setCategory] =  React.useState('')
    const [company, setCompany] =  React.useState('')
    const [error, setError] = React.useState(false);

    const addProduct = async() => {
    if(!name || !price || !category || !company)
    {
        setError(true);
    }
    console.log(name,price, category, company);
    const userId = JSON.parse(localStorage.getItem('user'))._id;
    console.log(userId._id)
    let result = await fetch('http://localhost:5000/add-product', {
        method: 'post',
        headers: {
            'Content-Type': 'application/json',
             authorization: `bearer ${JSON.parse(localStorage.getItem('token'))}`
        },
        body: JSON.stringify({name, price, category, userId, company})
    })
    result = await result.json();
    console.log(result);
  };


    return (
        <div className="product">
            <h1>Add Product</h1>
            <input type="text" className="inputBox" value={name} onChange={e => setName(e.target.value)} placeholder='Enter product name'/>
            {error && !name && <span className="invalid_data">Enter valid name</span>}
            <input type="text" className="inputBox" value={price} onChange={e => setPrice(e.target.value)} placeholder='Enter product price'/>
            {error && !price && <span className="invalid_data">Enter valid price</span>}
            <input type="text" className="inputBox" value={category} onChange={e=>setCategory(e.target.value)} placeholder='Enter product category'/>
            {error && !category && <span className="invalid_data">Enter valid category</span>}
            <input type="text" className="inputBox" value={company} onChange={e=>setCompany(e.target.value)} placeholder='Enter product company'/>
            {error && !company && <span className="invalid_data">Enter valid company</span>}
            <button onClick={addProduct}>Add Product</button>

        </div>
    )
}

export default AddProduct;