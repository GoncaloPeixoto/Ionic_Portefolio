import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-remove-modal',
  templateUrl: './remove-modal.component.html',
  styleUrls: ['./remove-modal.component.scss'],
})
export class RemoveModalComponent implements OnInit {

  id: any;

  constructor(private modalCtrl: ModalController) {}

  ngOnInit() {
  }

  dismissModal() {
    this.modalCtrl.dismiss();
  }
}