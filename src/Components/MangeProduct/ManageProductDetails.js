import React from 'react';
import { Table } from 'react-bootstrap';
import deleteLogo from '../icons/Group 33150.png'
const ManageProductDetails = (props) => {
    const {name, _id} = props.products;
    const handleDelete= id =>{
        console.log(id)
        fetch(`https://floating-fortress-75913.herokuapp.com/delete/${id}`, {
            method: 'DELETE'
        })
        .then(res => res.json())
        .then(result => {
            console.log('delete successfully')
        })
    }
    return (
        <div>
                <div style={{display:'flex', marginLeft:'300px'}}>
                    {/* <td>1</td> */}
                    <div style={{width:"200px", borderLeft:'1px solid gray', borderRight:'1px solid gray', borderBottom:'1px solid gray'}}>{props.products.name}</div>
                    <div style={{width:"200px", borderRight:'1px solid gray', borderBottom:'1px solid gray'}}>{props.products.price}</div>
                    <div style={{borderBottom:'1px solid gray', borderRight:'1px solid gray',}}><button onClick={() => handleDelete(_id)} style={{width:"200px", border:'none', backgroundColor:'white'}}> <img style={{width:'20px'}} src={deleteLogo} alt=""/> </button></div>
                </div>
        </div>
    );
};

export default ManageProductDetails;