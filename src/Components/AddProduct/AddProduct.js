import React, { useContext, useState } from 'react';
import { useForm } from "react-hook-form";
import axios from 'axios'
import { UserContext } from '../../App';

const AddProduct = () => {
    const { register, handleSubmit } = useForm();
    const [imageUrl, setImageUrl] = useState(null);
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)
    console.log('loggedinuser', loggedInUser.email)
    console.log(imageUrl)
    const onSubmit = data => {
        const eventData = {
            name: data.name,
            price: data.price,
            description: data.description,
            imageLink: imageUrl, 
            email: loggedInUser.email
        };
        const url = `https://floating-fortress-75913.herokuapp.com/addEvent`
        console.log('price', eventData)
        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(eventData)

        })
        .then(res => console.log('server site response'))
    };
    const handleImage = event =>{
        console.log(event.target.files[0])
        const imageData = new FormData();
        imageData.set('key', 'cbaa18b1ca6bae3b0e00b20f36807031')
        imageData.append('image', event.target.files[0])

        axios.post('https://api.imgbb.com/1/upload', imageData)
          .then(function (response) {
            setImageUrl(response.data.data.display_url);
          })
          .catch(function (error) {
            console.log(error);
          });
    }
    return (
        <div style={{width:'1200px'}}>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div style={{display:'flex', height:'200px', boxShadow:'10px 10px 10px gray', width:'700px', borderRadius:'7px', padding:'5px', margin:'0 auto', border:'1px solid gray', marginTop:'50px'}}>
                    <div style={{marginLeft:'60px', marginTop:'53px'}}>
                        <input name="name" placeholder="Name" ref={register} />
                        <br/>
                        <br/>
                        <input name="price" placeholder="Price" ref={register} />
                    <br/>
                    </div>
                    <div style={{marginLeft:'150px', marginTop:'53px'}}>
                        <input placeholder="description" name="description" ref={register}/>
                        <br/>
                        <br/>
                        <input type="file" onChange={handleImage}/>
                    </div>
                </div>
                <br/>
                <input style={{marginLeft:'870px', backgroundColor:'tomato', border:'none', borderRadius:'5px', padding:'5px'}} type="submit" />
            </form>
        </div>
    );
};

export default AddProduct;