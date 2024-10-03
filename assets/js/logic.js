const form = document.querySelector("#form");
form.addEventListener("submit", (event) => {
  event.preventDefault();
  const username = document.querySelector("#name");
  const title = document.querySelector("#title");
  const post = document.querySelector("#post");
  const allData = {
    username: username.value,
    title: title.value,
    post: post.value,
  };
  const strFromLocalStorage = localStorage.getItem("allData");
  const jsPrevPosts = [];
  //const jsPrevPosts = JSON.parse(strFromLocalStorage) || [];
  jsPrevPosts.push(allData);
  let blogString = JSON.stringify(jsPrevPosts);
  localStorage.setItem("allData", JSON.stringify(allData));
  window.location.href = "blog.html";
});
