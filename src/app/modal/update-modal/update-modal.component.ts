import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
@Component({
  selector: 'app-update-modal',
  templateUrl: './update-modal.component.html',
  styleUrls: ['./update-modal.component.scss'],
})
export class UpdateModalComponent implements OnInit {

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
