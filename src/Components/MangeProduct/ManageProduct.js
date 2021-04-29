import React, { useEffect, useState } from 'react';
import ManageProductDetails from './ManageProductDetails';
import { Table } from 'react-bootstrap';

const ManageProduct = () => {
    const [product, setProduct] = useState([]);
    useEffect(()=> {
        fetch('https://floating-fortress-75913.herokuapp.com/events')
        .then(res => res.json())
        .then(data => setProduct(data))
    }, [])
    return (
        <div style={{marginTop:'none', padding:'10px', height:'600px', width:'1200px', textAlign:'center'}}>
                <div style={{display:'flex', marginLeft:'300px', marginTop:'30px'}}>
                    {/* <th>Index of</th> */}
                    <div style={{width:"200px", borderTop:'1px solid gray', borderLeft:'1px solid gray', borderRight:'1px solid gray', borderBottom:'1px solid gray'}}>Description</div>
                    <div style={{width:"200px", borderTop:'1px solid gray', borderRight:'1px solid gray', borderBottom:'1px solid gray'}}>Quantity</div>
                    <div style={{width:"201px", borderTop:'1px solid gray', borderRight:'1px solid gray', borderBottom:'1px solid gray'}}>Price</div>
                </div>
            {
                product.map(pd => <ManageProductDetails products={pd}></ManageProductDetails>)
            }
        </div>
    );
};

export default ManageProduct;