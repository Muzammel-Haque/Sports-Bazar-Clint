import React, { useEffect, useState } from 'react';
import Cart from './cart/Cart';

const Home = () => {
    const [card, setCard] = useState([]);
    useEffect(()=> {
        fetch('https://floating-fortress-75913.herokuapp.com/events')
        .then(res => res.json())
        .then(data => setCard(data))
    }, [])

    
    return (
        <div style={{ width:'100%'}}>
            <div style={{width:'85%', borderRadius:'5%', margin:'0 auto',}}>
                {
                    card.length === 0 && <button style={{marginLeft:'550px', marginTop:'200px'}} class="btn btn-primary" type="button" disabled>
                    <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                    Loading...
                  </button>
                }
                <div className="row">
                    {
                        card.map(items => <Cart card={items}></Cart>)
                    }
                </div>
            </div>
        </div>
    
    );
};

export default Home;