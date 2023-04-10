/* eslint-disable no-undef */

{
  const select = {
    templateBook: '#template-book',
    bookList: '.books-list',
    book: '.book'
        
  };

  const templates = {
    menuProduct: Handlebars.compile(document.querySelector(select.templateBook).innerHTML),
  };


  console.log(templates);

  class BookShelf {
    constructor(){
      const thisBookShelf = this;
      thisBookShelf.render();
    }

    render(){
      const thisBookShelf = this;
      for (let book in dataSource.books){
        const singleBook = dataSource.books[book];
        const linkHTMLData = {name:singleBook.name, price:singleBook.price, id:singleBook.id, image:singleBook.image, rating:singleBook.rating};
        const linkHTML = templates.menuProduct(linkHTMLData);
        thisBookShelf.element = utils.createDOMFromHTML(linkHTML);
        const menuContainer = document.querySelector(select.bookList);
        menuContainer.appendChild(thisBookShelf.element);
        
      }
      thisBookShelf.initAction();
    }
    initAction(){
      let favoriteBooks = [];
      console.log(favoriteBooks);
      const booksImages = document.querySelectorAll('.books-list .book__image');
      console.log(booksImages);
      for (let bookImage of booksImages){
        console.log(bookImage);
        bookImage.addEventListener('click', function(event){
          event.preventDefault();
          bookImage.classList.add('favorite');
          const imageId = bookImage.getAttribute('data-id');
          console.log(imageId);
          favoriteBooks.push(imageId);
          console.log(favoriteBooks);
        });
      }
    }



    /*initAction(){
      const thisBookShelf = this;
      let favoriteBooks = [];
      thisBookShelf.booksContainer = document.querySelector(select.bookList);
      console.log(thisBookShelf.bookImage);
      for (let book in dataSource.books){
        const singleBook = dataSource.books[book];
        const bookId = singleBook.id;
        console.log(singleBook);
        console.log(bookId);
        thisBookShelf.booksContainer.addEventListener('click', function(event){
          const id = singleBook.id;
          event.preventDefault();
          favoriteBooks.push(id);
          console.log(favoriteBooks);
        //dodanie do tablicy. jak zminic dodanie do tablicy na dodanie klasy?
        });
      }
    } */
  }
  // klikniecie -> nasluchiwacz na ksiazki. funkcja powinna 
  // uruchamiac petle ktora sprawdza czy ksiazki maja
  // kliknieie -> dodanie do tablicy favoritebooks
  // kli


  const app = new BookShelf();
  console.log(app);
}



