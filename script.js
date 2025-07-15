function createPost() {
  const content = document.getElementById('postContent').value;
  const imageInput = document.getElementById('postImage');
  const feed = document.getElementById('feed');

  if (content.trim() === "") return alert("Post content is required");

  const post = document.createElement('div');
  post.className = 'post';
  post.innerHTML = `
    <p><strong>User123</strong> · Just now</p>
    <p>${content}</p>
    ${imageInput.files[0] ? `<img src="${URL.createObjectURL(imageInput.files[0])}" />` : ""}
    <p class="like-btn" onclick="toggleLike(this)">❤️ Like</p>
  `;

  feed.prepend(post);
  document.getElementById('postContent').value = '';
  imageInput.value = '';
}

function toggleLike(btn) {
  btn.classList.toggle('liked');
}
