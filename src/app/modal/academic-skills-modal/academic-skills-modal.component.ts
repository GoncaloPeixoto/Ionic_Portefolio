import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-academic-skills-modal',
  templateUrl: './academic-skills-modal.component.html',
  styleUrls: ['./academic-skills-modal.component.scss'],
})
export class AcademicSkillsModalComponent implements OnInit {

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
