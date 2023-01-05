import { Component, OnInit } from '@angular/core';
import { AlertController, ModalController } from '@ionic/angular';
import { CrudService } from 'src/app/services/api/crud.service';
@Component({
  selector: 'app-create-modal',
  templateUrl: './create-modal.component.html',
  styleUrls: ['./create-modal.component.scss'],
})
export class CreateModalComponent implements OnInit {

  title: any;
  description:any;
  select:any;
  toggle: any;
  constructor(
    private alertController: AlertController,
    private modalCtrl: ModalController,
    private crudService: CrudService,) {}

  ngOnInit() {}

  dismissModal() {
    this.modalCtrl.dismiss();
  }

  refreshPage() {
    location.reload();
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Erro',
      message: 'Please check the data and try again',
      buttons: ['OK'],
    });

    await alert.present();
  }

  newItem() {
    if (this.title && this.description && this.select) {
        if(this.toggle== undefined){
           this.toggle=false
        }
      const newItem = {
        title: this.title,
        description: this.description,
        isWanted: this.toggle
      };
      console.log(newItem);
      console.log(this.select);
      this.crudService.create(this.select, newItem).subscribe((res) => {
        console.log(res);
      });
      this.dismissModal();
    } else {
      this.dismissModal();
      this.presentAlert()
    }
  }
}
