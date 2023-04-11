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
      const thisBookShelf = this;
      let favoriteBooks = [];
      const booksImages = document.querySelectorAll('.books-list .book__image');
      console.log(booksImages);
      thisBookShelf.booksContainer = document.querySelector(select.bookList);

      thisBookShelf.booksContainer.addEventListener('click', function(event){
        event.preventDefault();
        const imageId = event.target.offsetParent.getAttribute('data-id');
        if(!favoriteBooks.includes(imageId)){
          event.target.offsetParent.classList.add('favorite');
          favoriteBooks.push(imageId);
        }
        else {
          event.target.offsetParent.classList.remove('favorite');
          const indexOfId = favoriteBooks.indexOf(imageId);
          const removedValue = favoriteBooks.splice(indexOfId, 1);
          console.log(removedValue);
        }
        console.log(favoriteBooks);
      });
    }
  }

  const app = new BookShelf();
  console.log(app);
}



