import React from 'react';

const OrderDetails = (props) => {
    const {name, price, imageLink, _id} = props.order

    const handleRemove= id =>{
        console.log(id)
        fetch(`https://floating-fortress-75913.herokuapp.com/remove/${id}`, {
            method: 'DELETE'
        })
        .then(res => res.json())
        .then(result => {
            console.log('delete successfully')
        })
    }
    return (
        <div>
            <div style={{display:'flex', border:'1px solid gray', width:'450px', borderRadius:'4px', margin:'10px auto', padding:'5px'}}>
                <div>
                    <img style={{width:'80px'}} src={imageLink} alt=""/>
                </div>
                <div style={{marginLeft:'20px'}}>
                    <h4>{name}</h4>
                    <h6>Price: ${price}</h6>
                    <button onClick={() => handleRemove(_id)} style={{ backgroundColor:'tomato', border:'none', padding:'6px', borderRadius:'5px',}}>Remove</button>
                </div>
            </div>
        </div>
    );
};

export default OrderDetails;