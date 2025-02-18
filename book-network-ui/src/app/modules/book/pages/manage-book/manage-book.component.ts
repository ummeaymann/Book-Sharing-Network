import {Component, OnInit} from '@angular/core';
import {BookRequest} from '../../../../services/models/book-request';
import {BookService} from '../../../../services/services/book.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-manage-book',
  templateUrl: './manage-book.component.html',
  styleUrls: ['./manage-book.component.scss']
})
export class ManageBookComponent implements OnInit {

  errorMsg: Array<string> = [];
  bookRequest: BookRequest = {
    authorName: '',
    isbn: '',
    synopsis: '',
    title: '',
    categoryId:0
  };
  selectedBookCover: any;
  selectedPicture: string | undefined;

  constructor(
    private bookService: BookService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {
  }

  isDropdownOpen = false;
  dropdownOptions = [
    { id: 1, name: 'Fiction' },
    { id: 2, name: 'Non-fiction' },
    { id: 3, name: 'Mystery' },
    { id: 4, name: 'Science Fiction' },
    { id: 5, name: 'Fantasy' },
    { id: 6, name: 'Romance' },
    { id: 7, name: 'Biography' },
    { id: 8, name: 'Historical' },
    { id: 9, name: 'Thriller' },
    { id: 10, name: 'Adventure' }
  ];
  getNameById(id: any) {
    const option = this.dropdownOptions.find(option => option.id === id);
    return option ? option.name : null; // Return null if not found
  }
  selectedOption: string | null = null;

  toggleDropdown(): void {
    this.isDropdownOpen = !this.isDropdownOpen;
  }
  selectOption(option: any): void {
    this.bookRequest.categoryId = option.id;
    this.selectedOption = option.name;
    this.isDropdownOpen = false;
  }

  ngOnInit(): void {
    const bookId = this.activatedRoute.snapshot.params['bookId'];
    if (bookId) {
      this.bookService.findBookById({
        'book-id': bookId
      }).subscribe({
        next: (book) => {
         this.bookRequest = {
           id: book.id,
           title: book.title as string,
           authorName: book.authorName as string,
           isbn: book.isbn as string,
           synopsis: book.synopsis as string,
           shareable: book.shareable,
           categoryId: book.categoryId
         };
         this.selectedPicture='data:image/jpg;base64,' + book.cover;
         this.selectedOption = this.getNameById(book.categoryId)
        }
      });
    }
  }

  saveBook() {
    this.bookService.saveBook({
      body: this.bookRequest
    }).subscribe({
      next: (bookId) => {
        this.bookService.uploadBookCoverPicture({
          'book-id': bookId,
          body: {
            file: this.selectedBookCover
          }
        }).subscribe({
          next: () => {
            this.router.navigate(['/books/my-books']);
          }
        });
      },
      error: (err) => {
        console.log(err.error);
        this.errorMsg = err.error.validationErrors;
      }
    });
  }

  onFileSelected(event: any) {
    this.selectedBookCover = event.target.files[0];
    console.log(this.selectedBookCover);

    if (this.selectedBookCover) {

      const reader = new FileReader();
      reader.onload = () => {
        this.selectedPicture = reader.result as string;
      };
      reader.readAsDataURL(this.selectedBookCover);
    }
  }
}
