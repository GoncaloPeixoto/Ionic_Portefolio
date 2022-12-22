import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  type = "segment value";

  constructor() {}

  segmentChanged(event: any) {
    console.log('Segment changed', event);
  }


}
