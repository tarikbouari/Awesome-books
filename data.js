let data = [ {title: "title" , author: "author"}];

// const add = document.getElementById('add');
const title = document.getElementById('title');
const author = document.getElementById('author');
const form = document.getElementById('form');
const message = document.getElementById('message');
const container = document.getElementById('container');
const btn = document.querySelectorAll('.btn');
console.log(btn);

 getData = localStorage.getItem('userdata');

if(!getData){
  data.forEach(item => {
    
   let initialize = ` <p> ${item.title}</p>
  <p>${item.author}</p>
  <button class="btn">Remove</button> 
  <hr> `;
  container.innerHTML += initialize;

  });
  
} else if (getData) {
  let dataStorage = JSON.parse(getData);

  dataStorage.forEach(item => {

    let initialize = ` <p> ${item.title}</p>
    <p>${item.author}</p>
    <button class="btn">Remove</button> 
    <hr> `;
    container.innerHTML += initialize;  
  })

}

form.addEventListener('submit', (e) => {
  e.preventDefault();
  //const inputTitle = title.value;
  //const inputAuthor = author.value;

  const bookData = {
    title: title.value,
    author: author.value,
  };

  function addBook() {
    const load = ` <p> ${bookData.title}</p>
  <p>${bookData.author}</p>
  <button class="btn"> Remove</button> 
  <hr>`;
    container.innerHTML += load;
  }
  if ((bookData.title) && (bookData.author)) {
   //  form.submit();
    data.push(bookData);
    console.log(data);
    addBook();
    localStorage.setItem('userdata', JSON.stringify(data));
    // form.reset();
  } else {
    message.textContent = 'Title and Author are required';
  }
  console.log(data);


});

// function removeBook() {
//  btn.forEach( item => {
//   item.parentElement.style.display="none";
//  });
   
// }

btn.forEach( (item) => {
  item.addEventListener('click', (e) => {
    let currentBtn = e.currentTarget
    currentBtn.parentElement.style.display="none";
    console.log('hello');
  })
  
  })

