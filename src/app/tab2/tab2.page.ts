import { CrudService } from './../services/api/crud.service';
import { Preferences } from '@capacitor/preferences';
import { TranslateService } from '@ngx-translate/core';
import { Component,ViewChild  } from '@angular/core';
import { ToastController,IonModal, LoadingController } from '@ionic/angular';
import { OverlayEventDetail } from '@ionic/core/components';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  type = "segment value";
  skillArray = [];

  constructor(
    private translateService : TranslateService,
    private toastController : ToastController,
    private loadingCtrl : LoadingController,
    private crudService : CrudService)  {}


    async changeLanguage(language : string) {
      await Preferences.set({ key: 'user-lang', value: language });
      await this.showToast();
      }

      async showToast() {
        const toast = await this.toastController.create({
        message: this.translateService.instant("language sucessfully changed"),
        duration: 4000,
        });
        await toast.present();
        }

  segmentChanged(event: any) {
    console.log('Segment changed', event);
  }

  refreshPage() {
    location.reload();
  }

  toggleTheme(event:any){
    console.log(event)
    if(event.detail.checked){
      document.body.setAttribute("color-theme","dark");
    }else {
      document.body.setAttribute("color-theme","light");
    }
  }

  // async loadSkill(){
  //   const loading = await this.loadingCtrl.create({
  //     spinner:'dots'});
  //     await loading.present();
  //     this.crudService.getSkills("skill").subscribe((res)=>{
  //       loading.dismiss()
  //       this.skillArray = [...this.skillArray,...res.skill];
  //     })
  // }

  @ViewChild(IonModal)
  modal!: IonModal;

  message = 'This modal example uses triggers to automatically open a modal when the button is clicked.';


  cancel() {
    this.modal.dismiss(null, 'cancel');
  }
}
