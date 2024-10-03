// get the local storage data
const dataFromLocalStorage = localStorage.getItem("allData");

// JSON parse the data 

console.log(dataFromLocalStorage);
// we will see the structure of our data
const allPosts = JSON.parse(dataFromLocalStorage);

// this is where we want the data to go to
const name2 = document.querySelector("#name2");
const title2 = document.querySelector("#title2");
const post2 = document.querySelector("#post2");

name2.textContent = allPosts.username;
title2.textContent = allPosts.title;
post2.textContent = allPosts.post;