let newContainer=document.querySelector(".container")
let getDog=async()=>{
    let result= await fetch(`https://dog.ceo/api/breeds/image/random`);
    let dogsToJson= await result.json();
    console.log(dogsToJson);

    let dogInfo={img:dogsToJson.message};
    console.log(`dogInfo`);
    let displayDog=`<img class="dog__image" src="${dogInfo.img}" />`;
    newContainer.innerHTML=displayDog;
    
}
getDog();