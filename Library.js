
class Library {
    constructor(title, author){
        this.title = title;
        this.author = author;
        this.id = Math.random() * 10;
    }
    
    
    checkData(){
        getData = localStorage.getItem('userdata');
     if (!getData) {
        container.innerHTML = '<h3> Add book to your colection</h3>';
      } else if (getData) {
         let data =[];

        data = JSON.parse(getData);
      
        data.forEach((item) => {
          const initialize = ` <div class="undo"><p> ${item.title}</p>
          <p>${item.author}</p>
          <button class="btn" id="${item.id}">Remove</button> 
          <hr></div> `;
          container.innerHTML += initialize;
        });
      }

    }

    addBook(){
      let data=[];
      getData = localStorage.getItem('userdata');
       data = JSON.parse(getdata);

        let obj = {
          title: this.title,
            author: this.author,
            id: this.id
        }; 

        if((this.title && this.author)){
          data.push(obj);
          
          data.forEach((item) => {
            const initialize = ` <div class="undo"><p> ${item.title}</p>
            <p>${item.author}</p>
            <button class="btn" id="${item.id}">Remove</button> 
            <hr></div> `;
            container.innerHTML += initialize;
          });

          localStorage.setItem('userdata', JSON.stringify(data));
          form.reset();
          window.location.reload();
        } else {
          message.textContent = 'Title and Author are required';
        }
        
    }

    removebook(){

        

    } 
    




 }
  