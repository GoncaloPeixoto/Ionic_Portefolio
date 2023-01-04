import { UpdateModalComponent } from './../modal/update-modal/update-modal.component';
import { RemoveModalComponent } from './../modal/remove-modal/remove-modal.component';
import { HttpClient } from '@angular/common/http';
import { ProjectsModalComponent } from './../modal/projects-modal/projects-modal.component';
import { PersonalExModalComponent } from './../modal/personal-ex-modal/personal-ex-modal.component';
import { AcademicSkillsModalComponent } from './../modal/academic-skills-modal/academic-skills-modal.component';
import { CrudService, Skill } from './../services/api/crud.service';
import {CreateModalComponent} from './../modal/create-modal/create-modal.component';
import { Preferences } from '@capacitor/preferences';
import { TranslateService } from '@ngx-translate/core';
import { Component,ViewChild  } from '@angular/core';
import { ToastController,IonModal, LoadingController, ModalController } from '@ionic/angular';
import { OverlayEventDetail } from '@ionic/core/components';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  type = "Achived";
  skillArray: any = [];
  skillWantedArray: any = [];
  PexArray: any = [];
  PexWantedArray: any = [];
  PSArray: any = [];
  OskillsArray: any = [];
  RAArray: any = [];
  ProjectsArray: any = [];
  FutureProjectsArray: any = [];

  constructor(
    private translateService : TranslateService,
    private toastController : ToastController,
    private loadingCtrl : LoadingController,
    private crudService : CrudService,
    private modalCtrl: ModalController)  {}


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

  async loadSkill(){
    const loading = await this.loadingCtrl.create({
      spinner:'dots'});
      await loading.present();
      this.crudService.getSkills("skill").subscribe((res)=>{
        loading.dismiss()
        this.skillArray = [...this.skillArray,...res.skill];
        console.log(res);
      })
  }

  async loadSkillWanted(){
    const loading = await this.loadingCtrl.create({
      spinner:'dots'});
      await loading.present();
      this.crudService.getSkills("skillWanted").subscribe((res)=>{
        loading.dismiss()
        this.skillWantedArray = [...this.skillWantedArray,...res.skill];
        console.log(res);
      })
  }

  async loadPex(){
    const loading = await this.loadingCtrl.create({
      spinner:'dots'});
      await loading.present();
      this.crudService.getPex("Pex").subscribe((res)=>{
        loading.dismiss()
        this.PexArray = [...this.PexArray,...res.Pex];
        console.log(res);
      })
  }

  async loadPexWanted(){
    const loading = await this.loadingCtrl.create({
      spinner:'dots'});
      await loading.present();
      this.crudService.getPex("PexWanted").subscribe((res)=>{
        loading.dismiss()
        this.PexWantedArray = [...this.PexWantedArray,...res.Pex];
        console.log(res);
      })
  }

  async loadPS(){
    const loading = await this.loadingCtrl.create({
      spinner:'dots'});
      await loading.present();
      this.crudService.getPS("PS").subscribe((res)=>{
        loading.dismiss()
        this.PSArray = [...this.PSArray,...res.PS];
        console.log(res);
      })
  }
  async loadOskills(){
    const loading = await this.loadingCtrl.create({
      spinner:'dots'});
      await loading.present();
      this.crudService.getOskills("Oskills").subscribe((res)=>{
        loading.dismiss()
        this.OskillsArray = [...this.OskillsArray,...res.Oskills];
        console.log(res);
      })
  }

  async loadRA(){
    const loading = await this.loadingCtrl.create({
      spinner:'dots'});
      await loading.present();
      this.crudService.getRA("RA").subscribe((res)=>{
        loading.dismiss()
        this.RAArray = [...this.RAArray,...res.RA];
        console.log(res);
      })
  }

  async loadProjects(){
    const loading = await this.loadingCtrl.create({
      spinner:'dots'});
      await loading.present();
      this.crudService.getProjects("Projects").subscribe((res)=>{
        loading.dismiss()
        this.ProjectsArray = [...this.ProjectsArray,...res.Projects];
        console.log(res);
      })
  }

  async loadFutureProjects(){
    const loading = await this.loadingCtrl.create({
      spinner:'dots'});
      await loading.present();
      this.crudService.getFutureProjects("FP").subscribe((res)=>{
        loading.dismiss()
        this.FutureProjectsArray = [...this.FutureProjectsArray,...res.FP];
        console.log(res);
      })
  }

  async openModalSkills(item:any) {
    console.log(item);
    const modalProjects = await this.modalCtrl.create({
      component: AcademicSkillsModalComponent,
      componentProps: {
        id: item.id,
        title: item.title,
        description: item.description,
      },
    });
    await modalProjects.present();
  }

  async openModalPex(item:any) {
    console.log(item);
    const modalProjects = await this.modalCtrl.create({
      component: PersonalExModalComponent,
      componentProps: {
        id: item.id,
        title: item.title,
        description: item.description,
      },
    });
    await modalProjects.present();
  }

  async openModalProj(item:any) {
    console.log(item);
    const modalProjects = await this.modalCtrl.create({
      component: ProjectsModalComponent,
      componentProps: {
        id: item.id,
        title: item.title,
        description: item.description,
      },
    });
    await modalProjects.present();
  }

  async openModalCreate() {
    console.log();
    const modalProjects = await this.modalCtrl.create({
      component: CreateModalComponent,

    });
    await modalProjects.present();
  }

  async openModalDelete() {
    console.log();
    const modalProjects = await this.modalCtrl.create({
      component: RemoveModalComponent,

    });
    await modalProjects.present();
  }

  async openModalUpdate() {
    console.log();
    const modalProjects = await this.modalCtrl.create({
      component: UpdateModalComponent,

    });
    await modalProjects.present();
  }

  ngOnInit() {this.loadSkill(),
    this.loadPex(),
    this.loadPS(),
    this.loadOskills(),
    this.loadRA(),
    this.loadSkillWanted(),
    this.loadPexWanted(),
    this.loadProjects(),
    this.loadFutureProjects()}
  
  @ViewChild(IonModal)
  modal!: IonModal;

  cancel() {
    this.modal.dismiss();
  }
}
