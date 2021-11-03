import React, { useState } from 'react'
import axios from "axios";
import './Fetch.css';

const Fetch = () => {
    const [dogName, setDogName]=useState("");
    const [dogChosen, setDogChosen] = useState(false);
    const [images, setImages]=useState([]);

    const baseURL="https://dog.ceo/api";
    const serchDogURL=`/breed/${dogName}/images`;

    const serchDog=()=>{
        axios.get(baseURL+serchDogURL).then(
            (res)=>{
                console.log(res.data.message);
                setImages([res.data.message[0]]);
                setDogChosen(true);
            }
        )
    }

      return (
        <div className="dog_img">
            <input type="text" onChange={(event) => {
                setDogName(event.target.value);
            }}
            />
        <button onClick={serchDog}>Search Dog</button>
        <div>
            <img src={images}></img>
        </div>
        </div>
    )
}

export default Fetch