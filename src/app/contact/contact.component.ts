import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  focus(e: Event, id: string) {
    if (e.target == document.activeElement) {

      $(id).addClass('d-flex').removeClass('d-none').animate({ bottom: '10px' })
    }

    else {
      $(id).addClass('d-none').removeClass('d-flex').animate({ bottom: '0px' })
    }
  }
}
