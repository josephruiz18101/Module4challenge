// get the local storage data
const dataFromLocalStorage =localStorage.getItem("allData")

//JSON parse the data

console.log(dataFromLocalStorage);
// we will see the structure of our data

const name2 = document.querySelector("#name2"); 
const title2 = document.querySelector("#title2");
const post2 = document.querySelector("#post2");

name2.textContent = name.Value;
title2.textContent = title.Value;
post2.textContent = post.Value;

