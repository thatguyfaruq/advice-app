"use strict";

let btn = document.querySelector("button");
let pTag = document.querySelector("p");
let h5Tag = document.querySelector("h5");

async function getAdvice(){
  let url = "https://api.adviceslip.com/advice";

  try {
    let req = await fetch (url);
    let res = await req.json ();
    console.log(res.slip.id);
    h5Tag.innerText = `ADVICE # ${res.slip.id}`
    pTag.innerText = ` “${res.slip.advice}” `;
    
  } catch (error) {
    console.log();
    
  }
}

btn.addEventListener("click", getAdvice);
window.addEventListener("load", getAdvice);