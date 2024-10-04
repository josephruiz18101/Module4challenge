// get the local storage data
const dataFromLocalStorage = localStorage.getItem("allData");
const posts = document.querySelector("#posts");
// console.log(dataFromLocalStorage);
// we will see the structure of our data
const allPosts = JSON.parse(dataFromLocalStorage);

// this is where we want the data to go to
// const name2 = document.querySelector("#name2");
// const title2 = document.querySelector("#title2");
// const post2 = document.querySelector("#post2");
// console.log({ allPosts });
for (let index = 0; index < allPosts.length; index++) {
  const element = allPosts[index];
  let postNumber = document.createElement("div");
  postNumber.setAttribute("id", "postNumber");
  postNumber.textContent = `Post ${index + 1}`;
  posts.append(postNumber);

  let name = document.createElement("div");
  name.setAttribute("id", "name");
  name.textContent = element.username;
  posts.append(name);

  let title = document.createElement("div");
  title.setAttribute("id", "title");
  title.textContent = element.title;
  posts.append(title);

  let post = document.createElement("div");
  post.setAttribute("id", "post");
  post.textContent = element.content;
  posts.append(post);

  let space = document.createElement("p");
  space.textContent = " ";
  posts.appendChild(space);

  // name2.textContent = element.username;
  // title2.textContent = element.title;
  // post2.textContent = element.content;
}