import { Component } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {


  // test = $('#navbar').text()

  we() {

    if ($("nav").offset()?.top != 0) {
      $("nav").removeClass('py-4')
    }


  }
}


window.addEventListener('scroll', function () {
  // if ($("nav").offset()?.top != 0){
  //   $("nav").removeClass('py-4')
  // }
  // else{
  //   $("nav").addClass('py-4')
  // }


  if ($("nav").offset()?.top == 0) {

    $("nav").stop().animate({
      paddingTop: '10px',
      paddingBottom: '10px'
    }
      ,
      {
        duration: 1,
        complete: function () {
          $("nav").animate({
            paddingTop: '25px',
            paddingBottom: '25px'
          },500)
        }
      })

  }

  else {

    $("nav").stop().animate({
      paddingTop: '10px',
      paddingBottom: '10px'
    }, 500).removeAttr('style')

  }

});

