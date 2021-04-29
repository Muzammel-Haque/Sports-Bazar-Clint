import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './cart.css'

const Cart = (props) => {
    console.log(props.card)
    const {name, price, _id, imageLink} = props.card;
    return (
            <div style={{backgroundColor:'rgb(233, 220, 220)',}} className="col-md-4">
            <div  style={{marginLeft:'20px', marginTop:'50px'}}>
            <Card style={{ width: '18rem', border: 'none', textAlign:'center', 
            boxShadow:'5px 10px 10px gray', padding:'10px' }}>
                <Card.Img style={{height:'300px', width: '250px',marginLeft:'9px',}} variant="top" src={imageLink} />
                <h5>{name}</h5>
                <span style={{display:'flex',}}><h4 style={{marginLeft:'18px', color:'tomato'}}>${price}</h4> <Link to={'/checkout/'+_id}><button style={{marginLeft:'120px', backgroundColor:'tomato', border:'none', borderRadius:'5px', padding:'4px'}}>Buy Now</button></Link></span>
                
            </Card>
            </div>
        </div>
    );
};

export default Cart;