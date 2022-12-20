import { Component } from '@angular/core';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  constructor() {}

  items = ['Item 1', 'Item 2', 'Item 3'];

clearList() {
  this.items.splice(0, this.items.length);
}
}



