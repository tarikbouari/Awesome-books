let data = [];

const title = document.getElementById('title');
const author = document.getElementById('author');
const form = document.getElementById('form');
const message = document.getElementById('message');
const container = document.getElementById('container');

const getData = localStorage.getItem('userdata');

if (!getData) {
  container.innerHTML = '<h3> Add book to your colection</h3>';
} else if (getData) {
  data = JSON.parse(getData);

  data.forEach((item) => {
    const initialize = ` <div class="undo"><p> ${item.title}</p>
    <p>${item.author}</p>
    <button class="btn" id="${item.id}">Remove</button> 
    <hr></div> `;
    container.innerHTML += initialize;
  });
}

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const bookData = {
    title: title.value,
    author: author.value,
    id: Math.random() * 10,
  };

  function addBook() {
    const load = ` <div class="undo" ><p> ${bookData.title}</p>
  <p>${bookData.author}</p>
  <button class="btn" id="${bookData.id}"> Remove</button> 
  <hr></div>`;
    container.innerHTML += load;
  }
  if ((bookData.title) && (bookData.author)) {
    data.push(bookData);
    addBook();
    localStorage.setItem('userdata', JSON.stringify(data));
    form.reset();
    window.location.reload();
  } else {
    message.textContent = 'Title and Author are required';
  }
});
const btn = document.querySelectorAll('.btn');

btn.forEach((item) => {
  item.addEventListener('click', (e) => {
    e.preventDefault();
    const currentBtn = e.currentTarget;
    const output = data.filter((item) => parseInt((item.id), 10) !== parseInt((currentBtn.id), 10));
    localStorage.setItem('userdata', JSON.stringify(output));
    data = JSON.parse(getData);
    data.forEach((item) => {
      const initialize = ` <div class="undo"><p> ${item.title}</p>
      <p>${item.author}</p>
      <button class="btn" id="${item.id}">Remove</button> 
      <hr></div> `;
      container.innerHTML += initialize;
      window.location.reload();
    });
  });
});
