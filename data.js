// let data = [ ];

// // const add = document.getElementById('add');
// const title = document.getElementById('title');
// const author = document.getElementById('author');
// const form = document.getElementById('form');
// const message = document.getElementById('message');
// const container = document.getElementById('container');
// const removeBtn = document.querySelectorAll('.btn');
// // console.log(removeBtn);
//  date = new Date();
//  getData = localStorage.getItem('userdata');

// if(!getData){
//   // data.forEach(item => {    
//  let initialize = `<h1> Add a book to your collection<h/> `;
//   container.innerHTML += initialize;

// } else if (getData) {
//   let dataStorage = JSON.parse(getData);

//   dataStorage.forEach(item => {

//     let initialize = ` <p> ${item.title}</p>
//     <p>${item.author}</p>
//     <button class="btn">Remove</button> 
//     <hr> `;
//     container.innerHTML += initialize;  
//   })

// }

// form.addEventListener('submit', (e) => {
//   e.preventDefault();
//   //const inputTitle = title.value;
//   //const inputAuthor = author.value;
//   const bookData = {
//     title: title.value,
//     author: author.value,
//   };
 
//   function addBook() {
//     for( i =0; i< 50; i++){
      
//       const load = `<p> ${bookData.title}</p>
//       <p>${bookData.author}</p>
//       <button class="btn" data-id = "${i++}" > Remove</button> 
//       <hr>`;
//         container.innerHTML += load;
//     }
      
//     } 
   
//   if ((bookData.title) && (bookData.author)) {
//    //  form.submit();
//     data.push(bookData);
//     console.log(data);
//     addBook();
//     localStorage.setItem('userdata', JSON.stringify(data));
//     // form.reset();
//   } else {
//     message.textContent = 'Title and Author are required';
//   }
//   console.log(data);


// });

// // function removeBook() {
// //  btn.forEach( item => {
// //   item.parentElement.style.display="none";
// //  });
   
// // }

// removeBtn.forEach( (item) => {
//   item.addEventListener('click', (e) => {
//     e.preventDefault();
//     let currentBtn = e.currentTarget
//     console.log('hello');
//     currentBtn.parentElement.style.display="none";
   
//   })
  
//   })


let data = [ {title: "title" , author: "author"}];

// const add = document.getElementById('add');
const title = document.getElementById('title');
const author = document.getElementById('author');
const form = document.getElementById('form');
const message = document.getElementById('message');
const container = document.getElementById('container');


 getData = localStorage.getItem('userdata');

if(!getData){
  
  data.forEach(item => {
    
   let initialize = ` <div class"undo"><p> ${item.title}</p>
  <p>${item.author}</p>
  <button class="btn" id="${item.id}">Remove</button> 
  <hr></div> `;
  container.innerHTML += initialize;

  });
  
} else if (getData) {
   data = JSON.parse(getData);

  data.forEach(item => {

    let initialize = ` <div class="undo"><p> ${item.title}</p>
    <p>${item.author}</p>
    <button class="btn" id="${item.id}">Remove</button> 
    <hr></div> `;
    container.innerHTML += initialize;  
  })

}

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const bookData = {
    title: title.value,
    author: author.value,
    id: Date.now()
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
   
  } else {
    message.textContent = 'Title and Author are required';
  }
  const btn = document.querySelectorAll('.btn');
  
  btn.forEach( (item) => {
    console.log("hello");
    item.addEventListener('click', (e) => {
      if(e.target.classList.contains("btn")){
        data = data.filter(item =>item.id != e.target.id)
        localStorage.setItem('userdata', JSON.stringify(data));
  
        data.forEach(item => {
      
          let initialize = ` <div class"undo"><p> ${item.title}</p>
         <p>${item.author}</p>
         <button class="btn" id="${item.id}">Remove</button> 
         <hr></div> `;
         container.innerHTML += initialize;
        
      })
    };
  });
  });
  
});

