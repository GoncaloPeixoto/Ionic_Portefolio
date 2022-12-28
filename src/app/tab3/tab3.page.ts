import { Preferences } from '@capacitor/preferences';
import { TranslateService } from '@ngx-translate/core';
import { Component } from '@angular/core';
import { ToastController } from '@ionic/angular';


@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  constructor(
    private translateService : TranslateService,
    private toastController : ToastController,
    private toastController2: ToastController)  {}

    async presentToast(position:'bottom') {
      const toast = await this.toastController2.create({
        message: 'Message sent',
        duration: 1500,
        position: position
      });
  
      await toast.present();
    }

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
  items = ['Item 1', 'Item 2', 'Item 3'];

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

}



