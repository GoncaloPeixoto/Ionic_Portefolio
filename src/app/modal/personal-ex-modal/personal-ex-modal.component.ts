import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-personal-ex-modal',
  templateUrl: './personal-ex-modal.component.html',
  styleUrls: ['./personal-ex-modal.component.scss'],
})
export class PersonalExModalComponent implements OnInit {

  id: any;
  title: any;
  description: any;
  constructor(private modalCtrl: ModalController) {}

  ngOnInit() {
    this.title;
    this.description;
  }

  dismissModal() {
    this.modalCtrl.dismiss();
  }
}
