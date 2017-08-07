let url = "https://api.github.com/users/nicknauert";
let wrapper = document.querySelector(".body");

fetch(url)
  .then(function(data){
    return data.json();
  })
  .then(function(data){
    let info =
    `
    <section id="header">
      <h1>${data.name}</h1>
    </section>
    <div class="wrapper">
      <section id="left">
        <h3>The Basics</h3>
        <div class="row">
          <p>Name:</p><span>${data.name}</span>
        </div>
        <div class="row">
          <p>Email:</p><span>${data.email}</span>
        </div>
        <div class="row">
          <p>GitHub URL:</p><span><a href="${data.html_url}">Nick Nauert</a></span>
        </div>
        <div class="row">
          <p>Company:</p><span>${data.company}</span>
        </div>
        <div class="row">
          <p>Website:</p><span>${data.blog}</span>
        </div>
      </section>
      <section id="right">
        <h3>The Story</h3>
        <p>${data.bio}</p>
      </section>
      <section id="img">
        <img src="${data.avatar_url}">
      </section>
    </div>

    `;
    wrapper.innerHTML = info;

  })
