import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Table } from 'react-bootstrap';
import Detail from './Detail';
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';

const CheckOut = () => {
    const [product, setProduct] = useState([])
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)
    const email = loggedInUser.email
    const items = {...product, email}
    console.log('pditems', items)
    
    const { id } = useParams();
    console.log('console',id, product)

    useEffect(()=>{
        fetch(`https://floating-fortress-75913.herokuapp.com/event/${id}`)
        .then(res => res.json())
        .then(data => setProduct(data[0]))
    }, [])

    const handleAdd = () => {

        const url = `https://floating-fortress-75913.herokuapp.com/addProduct`
        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(items)

        })
        .then(res => console.log('server site response'))

    }

    return (
        <div>
            <div style={{width:'80%', margin:"80px auto"}}>
                <h1>CheckOut</h1>
            <Table striped bordered hover variant="dark">
                <thead>
                    <tr>
                    {/* <th>Index of</th> */}
                    <th>Description</th>
                    <th>Quantity</th>
                    <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    {/* <td>1</td> */}
                    <td>{product.name}</td>
                    <td>1</td>
                    <td>{product.price}</td>
                    </tr>
                    {/* <tr> */}
                    {/* <td>2</td>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>@fat</td>
                    </tr> */}
                    <tr>
                    {/* <td>3</td> */}
                    <td colSpan="2">Total</td>
                    <td>{product.price}</td>
                    </tr>
                </tbody>
            </Table>
            <Link to='/order'><button onClick={handleAdd} style={{marginLeft:'1000px', backgroundColor:'tomato', border:'none', padding:'6px', borderRadius:'5px'}}>Check Out</button></Link>
            </div>
        </div>
    );
};

export default CheckOut;