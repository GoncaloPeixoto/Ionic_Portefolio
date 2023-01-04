import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
@Component({
  selector: 'app-create-modal',
  templateUrl: './create-modal.component.html',
  styleUrls: ['./create-modal.component.scss'],
})
export class CreateModalComponent implements OnInit {

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
