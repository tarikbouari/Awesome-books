
data = [ { title: "The life secret",
            Author: "Andreas Pick"

        }]


const add = document.getElementById('add');
const title = document.getElementById('title');
const author = document.getElementById('author');
const form = document.getElementById('form');
const message = document.getElementById('message');




form.addEventListener('submit', (e)=>{
    e.preventDefault();

    let bookData = {
        title : title.value,
        author : author.value
    }

    localStorage.setItem('user', JSON.stringify(bookData));

    add.addEventListener('onclick', (e)=>{
        
        if (bookData.title & bookData.author){
        form.submit();
        form.reset();
        data.push(bookData);
    }
    else {
        message.textContent = ' Title and Author are required'
        return "don't exit";
    }

    })
        
    

    
  

})

