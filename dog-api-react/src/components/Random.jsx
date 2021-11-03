import axios from 'axios';
import React, { useState } from 'react'

const Random = () => {
    const rnadomDogURL="https://dog.ceo/api/breeds/image/random";
    const [image, setImage]=useState([]);
    const randomDog=()=>{
        axios.get(rnadomDogURL).then(
            (res)=>{
                console.log(res.data.message);
                setImage(res.data.message)
            }
        )
    }
    return (
        <div>
            <button onClick={randomDog}>Random Dog</button>
            <div>
            <img src={image}></img>
        </div>
        </div>
    )
}

export default Random
