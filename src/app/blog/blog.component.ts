import { Component } from '@angular/core';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss'],
})
export class BlogComponent {
  cards = [1,2,3,4,5,6]
  // nombrePage = $('.content').length;

  // constructor() {}

  // showPage(pagination: any) {
  //   if (pagination < 0 || pagination >= this.nombrePage) return;

  //   // $('.content').hide().eq(pagination).show();
  //   // $('#pagin li').removeClass('active').eq(pagination).addClass('active');
  // }
  // // movePage(e: Event) {
  // //   e.preventDefault();
  // //   this.showPage($(this).parent().index());
  // // }
}
