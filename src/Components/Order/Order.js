import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../App';
import OrderDetails from './OrderDetails';

const Order = () => {
    const [order, setOrder] = useState([])
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)
    console.log(loggedInUser.email)

    useEffect(()=>{
        fetch('https://floating-fortress-75913.herokuapp.com/products?email='+loggedInUser.email)
        .then(res => res.json())
        .then(data => setOrder(data))
    }, [])

    const handleOrder = ()=>{
        alert('Order Successfully Added')
    }
    return (
        <div>
            {
                order.map(orders => <OrderDetails order={orders}></OrderDetails>)
            }
            
            <button style={{marginLeft:'808px', backgroundColor:'tomato', border:'none', borderRadius:'4px', padding:'5px', }} onClick={handleOrder}>Order Please</button>
        </div>
    );
};

export default Order;