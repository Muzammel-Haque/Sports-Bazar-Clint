import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import axios from 'axios'

const Event = () => {
    const { register, handleSubmit } = useForm();
    const [imageUrl, setImageUrl] = useState(null)
    console.log(imageUrl)
    const onSubmit = data => {
        const eventData = {
            name: data.name,
            price: data.price,
            imageLink: imageUrl
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
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input name="name" ref={register} />
                <br/>
                <input name="price" ref={register} />
                <br/>
                <input name="exampleRequired" type="file" onChange={handleImage}/>
                <br/>
                <input type="submit" />
            </form>
        </div>
    );
};

export default Event;