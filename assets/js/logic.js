const Form = document.querySelector("#form")

form.addEventListener("submit",(event) => {
  event.preventDefault();
const name = document.querySelector("#name"); 
 const title = document.querySelector("#title");
 const post = document.querySelector("#post");
window.location.href = "blog.html"

});
// save name,title, post to an object
const allData = {
    name: name.value,
    title: title.value,
    post: post.value,
};
// json stringify allData
//save name,title,post to local storage
localStorage.setItem("allData",JSON.stringify(allData));

