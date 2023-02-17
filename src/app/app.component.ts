import { Component } from '@angular/core';
import * as $ from "jquery";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent  {
  title = 'flotarium';
  scrollTo (pIdSection: string) {
    let position = $('#' + pIdSection).offset()?.top;
    let windoWidth = window.innerWidth;
    let isIOS = /iPad|iPhone|iPod/.test(navigator.platform);
    let navTop = $('.app-main-nav');
    // let fixPosition = 75;
    let fixPosition = 0;
    let navFixedPostion = 75;
    if (position || position === 0) {
      position = position - fixPosition - navFixedPostion;
      $("html, body").animate({scrollTop: position }, 100);
    }
  }

}
