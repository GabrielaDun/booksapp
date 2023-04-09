/* eslint-disable no-undef */

{
  const select = {
    templateBook: '#template-book',
    bookList: '.books-list',
        
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
        console.log(singleBook);
        const bookName = singleBook.name;
        const linkHTMLData = {name:bookName, price:singleBook.price, id:singleBook.id, image:singleBook.image, rating:singleBook.rating};
        const linkHTML = templates.menuProduct(linkHTMLData);
        thisBookShelf.element = utils.createDOMFromHTML(linkHTML);
        const menuContainer = document.querySelector(select.bookList);
        console.log(menuContainer);
        menuContainer.appendChild(thisBookShelf.element);
      }
    }
  }
  const app = new BookShelf();
  console.log(app);
}



