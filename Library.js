
class Library {
    constructor(title, author){
        this.title = title;
        this.author = author;
        this.id = Math.random() * 10;
        // this.data = [];
    }
    
    checkData(){
        getData = localStorage.getItem('userdata');
     if (!getData) {
        container.innerHTML = '<h3> Add book to your colection</h3>';
      } else if (getData) {
        let da
        this.data = JSON.parse(getData);
      
        this.data.forEach((item) => {
          const initialize = ` <div class="undo"><p> ${item.title}</p>
          <p>${item.author}</p>
          <button class="btn" id="${item.id}">Remove</button> 
          <hr></div> `;
          container.innerHTML += initialize;
        });
      }

    }

     
    addBook(){
        
        
        if((this.title && this.author)){
          this.data.push();
          addBook();
          localStorage.setItem('userdata', JSON.stringify(this.data));
          form.reset();
          window.location.reload();
        } else {
          message.textContent = 'Title and Author are required';
        }
        
        const load = ` <div class="undo" ><p> ${this.title}</p>
        <p>${this.author}</p>
        <button class="btn" id="${this.id}"> Remove</button> 
        <hr></div>`;
          container.innerHTML += load;

    }






 }
  