import { Injectable, signal } from '@angular/core';
import { BookListItem } from '../core/models/book.model';

@Injectable({
  providedIn: 'root',
})
export class BookService {
  private readonly booksList = signal<readonly BookListItem[]>([
    {
      id: 1,
      title: 'Clean Code',
      author: 'Robert C. Martin',
      year: 2008,
      price: 45,
      thumbnailUrl:
        'https://tse3.mm.bing.net/th/id/OIP.ZfYHb383Tk0kUMP-XsfWegHaJI?rs=1&pid=ImgDetMain&o=7&rm=3',
    },
    {
      id: 2,
      title: 'You Don’t Know JS',
      author: 'Kyle Simpson',
      year: 2015,
      price: 30,
      thumbnailUrl: 'https://kbpsystem777.github.io/You-Dont-Know-JS/scope&closures/cover.jpg',
    },
    {
      id: 3,
      title: 'The Pragmatic Programmer',
      author: 'Andrew Hunt',
      year: 1999,
      price: 50,
      thumbnailUrl:
        'https://tse2.mm.bing.net/th/id/OIP.KI_tsGHe4sBa0xd3WjpMyQHaJs?rs=1&pid=ImgDetMain&o=7&rm=3https://m.media-amazon.com/images/I/41as+WafrFL._SX258_BO1,204,203,200_.jpg',
    },
    {
      id: 4,
      title: 'Introduction to Algorithms',
      author: 'Thomas H. Cormen',
      year: 2009,
      price: 80,
      thumbnailUrl: 'https://m.media-amazon.com/images/I/61O5SsbL8HL.jpg',
    },
    {
      id: 5,
      title: 'Design Patterns',
      author: 'Erich Gamma',
      year: 1994,
      price: 55,
      thumbnailUrl: 'https://m.media-amazon.com/images/I/81IGFC6oFmL.jpg',
    },
    {
      id: 6,
      title: 'JavaScript: The Good Parts',
      author: 'Douglas Crockford',
      year: 2008,
      price: 25,
      thumbnailUrl:
        'https://tse2.mm.bing.net/th/id/OIP.XMp3HL2PJ3Q3uJVX5Kpm6gHaFj?rs=1&pid=ImgDetMain&o=7&rm=3',
    },
    {
      id: 7,
      title: 'Refactoring',
      author: 'Martin Fowler',
      year: 1999,
      price: 60,
      thumbnailUrl: 'https://m.media-amazon.com/images/I/81ezCJTXFKL._SY342_.jpg',
    },
    {
      id: 8,
      title: 'The Clean Coder',
      author: 'Robert C. Martin',
      year: 2011,
      price: 40,
      thumbnailUrl:
        'https://th.bing.com/th/id/R.788946819ba767dfc3703534d25b6e48?rik=xK4vwaVAEnmbDQ&pid=ImgRaw&r=0',
    },
    {
      id: 9,
      title: 'C# in Depth',
      author: 'Jon Skeet',
      year: 2019,
      price: 70,
      thumbnailUrl: 'https://hanoibookstore.com/storage/c-in-depth-3rd-edition-1-800x800.jpg',
    },
    {
      id: 10,
      title: 'Effective Java',
      author: 'Joshua Bloch',
      year: 2018,
      price: 65,
      thumbnailUrl:
        'https://tse4.mm.bing.net/th/id/OIP.H-g2C4LlB0gaxPvB-99xeQHaKK?rs=1&pid=ImgDetMain&o=7&rm=3',
    },
  ]);

  getBooks() {
    return this.booksList();
  }

  getBookById(id: number): BookListItem | undefined {
    return this.booksList().find((book) => book.id === id);
  }
}
