/* eslint-disable no-undef */

{
  const select = {
    templateBook: '#template-book',
    bookList: '.books-list',
    book: '.book',
    filters: '.filters',
    bookImage: '.book__image'
        
  };

  const templates = {
    menuProduct: Handlebars.compile(document.querySelector(select.templateBook).innerHTML),
  };

  const filters = [];


  class BookShelf {
    constructor(){
      const thisBookShelf = this;
      thisBookShelf.render();
    }

    getElements(){
      thisBookList.booksContainer = document.querySelector(select.booksList);
      thisBookShelf.filtersContainer = document.querySelector(select.filters);
    }

    render(){
      const thisBookShelf = this;
      for (let book in dataSource.books){
        const singleBook = dataSource.books[book];
        const ratingBgc = thisBookShelf.determinateRatingBgc(singleBook.rating);
        const ratingWidth = 10 * singleBook.rating;
        const linkHTMLData = {ratingBgc: ratingBgc, ratingWidth: ratingWidth, name:singleBook.name, price:singleBook.price, id:singleBook.id, image:singleBook.image, rating:singleBook.rating};
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
      thisBookShelf.filtersContainer = document.querySelector(select.filters);
      thisBookShelf.filtersContainer.addEventListener('click', function(event){
        if (event.target.tagName =='INPUT' && event.target.type =='checkbox' && event.target.name =='filter'){
          console.log(event.target.value);
          if(event.target.checked == true){
            filters.push(event.target.value); 
          }
          if (event.target.checked == false){
            const findTag = filters.indexOf(event.target.value);
            const removeTag = filters.splice(findTag, 1);
            (console.log(removeTag));
          }

        }
        console.log(event.target.checked);
        thisBookShelf.filters();
      });

    }
    filters(){
      for (let book in dataSource.books){
        const singleBook = dataSource.books[book];

        console.log(filters);
        let shouldBeHidden = false;
        for (let filter in filters){
          const singleFilter = filters[filter];
          const details = singleBook.details[singleFilter];
          if (details == false) {
            shouldBeHidden = true;
          }
        }
        const bookImage = document.querySelector('.book__image[data-id="' + singleBook.id + '"]');
        if (shouldBeHidden == true){
          bookImage.classList.add('hidden');
        }
        else {
          bookImage.classList.remove('hidden');
        }
        
      }
    }
    determinateRatingBgc(rating){
      const thisBookShelf = this;

      thisBookShelf.ratingBgc = '';
      if(rating < 6){
        thisBookShelf.ratingBgc = 'linear-gradient(to bottom,  #fefcea 0%, #f1da36 100%)';
      }else if(rating > 6 && rating <= 8){
        thisBookShelf.ratingBgc = 'linear-gradient(to bottom, #b4df5b 0%,#b4df5b 100%)';
      }else if(rating > 8 && rating <= 9){
        thisBookShelf.ratingBgc = 'linear-gradient(to bottom, #299a0b 0%, #299a0b 100%)';
      }else if(rating > 9){
        thisBookShelf.ratingBgc = 'linear-gradient(to bottom, #ff0084 0%,#ff0084 100%)';
      }

      return thisBookShelf.ratingBgc;
    
      
    }
  }

  const app = new BookShelf();
  console.log(app);
}



