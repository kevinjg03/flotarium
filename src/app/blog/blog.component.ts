import { Component } from '@angular/core';
@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss'],
})
export class BlogComponent {
  cards = [1,2,3,4,5,6];

  title = 'Angular Paginator';
  currentPage = 1;
  itemsPerPage = 4;
  maxSize = 10;
  jsonArray = this.cards;

  constructor() {}

}
