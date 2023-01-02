import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-projects-modal',
  templateUrl: './projects-modal.component.html',
  styleUrls: ['./projects-modal.component.scss'],
})
export class ProjectsModalComponent implements OnInit {

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
