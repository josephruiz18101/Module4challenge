const form = document.querySelector("#form");
form.addEventListener("submit", (event) => {
  event.preventDefault();
  // Select input elements
  const username = document.querySelector("#name");
  const title = document.querySelector("#title");
  const post = document.querySelector("#post");
  // Create an object for the new post
  const allData = {
    username: username.value,
    title: title.value,
    content: post.value,
  };
  // Retrieve existing posts from local storage
  const strFromLocalStorage = localStorage.getItem("allData");
  // Parse existing data or initialize as an empty array
  let jsPrevPosts;
  try {
    if (strFromLocalStorage) {
      const parsedData = JSON.parse(strFromLocalStorage);
      // Check if parsedData is an object and convert it to an array
      jsPrevPosts = Array.isArray(parsedData) ? parsedData : [parsedData];
    } else {
      jsPrevPosts = []; // Initialize as an empty array if no data
    }
  } catch (error) {
    console.error("Failed to parse local storage data:", error);
    jsPrevPosts = []; // Reset to an empty array if parsing fails
  }
  // Ensure jsPrevPosts is an array
  if (!Array.isArray(jsPrevPosts)) {
    console.error("Expected jsPrevPosts to be an array:", jsPrevPosts);
    return; // Exit if it's not an array
  }
  // Add the new post to the array
  jsPrevPosts.push(allData);
  // Save the updated array back to local storage
  localStorage.setItem("allData", JSON.stringify(jsPrevPosts));
  // Redirect to the blog page
  window.location.href = "blog.html";
});