async function newFormHandler(event) {
    event.preventDefault();
  
    // grab post-title and post-url form from
    const title = document.querySelector('input[name="post-title"]').value;
    const content = document.querySelector('input[name="post-content"]').value;
  
    // send with POST request to /api/posts
    const response = await fetch(`/api/posts`, {
      method: "POST",
      body: JSON.stringify({
        title,
        content,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
  
    if (response.ok) {
      document.location.replace("/dashboard");
    } else {
      alert(response.statusText);
    }
  }
  
  document
    .querySelector(".new-post-form")
    .addEventListener("submit", newFormHandler);
  