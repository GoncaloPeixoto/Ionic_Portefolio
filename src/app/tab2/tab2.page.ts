import { UpdateModalComponent } from './../modal/update-modal/update-modal.component';
import { RemoveModalComponent } from './../modal/remove-modal/remove-modal.component';
import { HttpClient } from '@angular/common/http';
import { ProjectsModalComponent } from './../modal/projects-modal/projects-modal.component';
import { PersonalExModalComponent } from './../modal/personal-ex-modal/personal-ex-modal.component';
import { AcademicSkillsModalComponent } from './../modal/academic-skills-modal/academic-skills-modal.component';
import { CrudService, Skill } from './../services/api/crud.service';
import { CreateModalComponent } from './../modal/create-modal/create-modal.component';
import { Preferences } from '@capacitor/preferences';
import { TranslateService } from '@ngx-translate/core';
import { Component, ViewChild } from '@angular/core';
import {
  ToastController,
  IonModal,
  LoadingController,
  ModalController,
} from '@ionic/angular';
import { OverlayEventDetail } from '@ionic/core/components';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
})
export class Tab2Page {
  type = 'Achived';
  skillArray: any = [];
  skillWantedArray: any = [];
  PexArray: any = [];
  PexWantedArray: any = [];
  PSArray: any = [];
  OskillsArray: any = [];
  RAArray: any = [];
  ProjectsArray: any = [];
  FutureProjectsArray: any = [];

  PSWantedArray: any = [];
  OskillsWantedArray: any = [];
  RAWantedArray: any = [];
  ProjectsWantedArray: any = [];
  FutureProjectsWantedArray: any = [];

  constructor(
    private translateService: TranslateService,
    private toastController: ToastController,
    private loadingCtrl: LoadingController,
    private crudService: CrudService,
    private modalCtrl: ModalController
  ) {}

  async changeLanguage(language: string) {
    await Preferences.set({ key: 'user-lang', value: language });
    await this.showToast();
  }

  async showToast() {
    const toast = await this.toastController.create({
      message: this.translateService.instant('language sucessfully changed'),
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

  toggleTheme(event: any) {
    console.log(event);
    if (event.detail.checked) {
      document.body.setAttribute('color-theme', 'dark');
    } else {
      document.body.setAttribute('color-theme', 'light');
    }
  }

  async loadSkill() {
    const loading = await this.loadingCtrl.create({
      spinner: 'dots',
    });
    await loading.present();
    this.crudService.getSkills('skill').subscribe((res) => {
      loading.dismiss();
      this.skillArray = [...this.skillArray, ...res.skill];
      console.log(res);
    });
  }

  async loadSkillWanted() {
    const loading = await this.loadingCtrl.create({
      spinner: 'dots',
    });
    await loading.present();
    this.crudService.getSkills('skillWanted').subscribe((res) => {
      loading.dismiss();
      this.skillWantedArray = [...this.skillWantedArray, ...res.skill];
      console.log(res);
    });
  }

  async loadPex() {
    const loading = await this.loadingCtrl.create({
      spinner: 'dots',
    });
    await loading.present();
    this.crudService.getPex('Pex').subscribe((res) => {
      loading.dismiss();
      this.PexArray = [...this.PexArray, ...res.Pex];
      console.log(res);
    });
  }

  async loadPexWanted() {
    const loading = await this.loadingCtrl.create({
      spinner: 'dots',
    });
    await loading.present();
    this.crudService.getPex('PexWanted').subscribe((res) => {
      loading.dismiss();
      this.PexWantedArray = [...this.PexWantedArray, ...res.Pex];
      console.log(res);
    });
  }

  async loadPS() {
    const loading = await this.loadingCtrl.create({
      spinner: 'dots',
    });
    await loading.present();
    this.crudService.getPS('PS').subscribe((res) => {
      loading.dismiss();
      this.PSArray = [...this.PSArray, ...res.PS];
      console.log(res);
    });
  }

  async loadPSWanted() {
    const loading = await this.loadingCtrl.create({
      spinner: 'dots',
    });
    await loading.present();
    this.crudService.getPS('PSWanted').subscribe((res) => {
      loading.dismiss();
      this.PSWantedArray = [...this.PSWantedArray, ...res.PS];
      console.log(res);
    });
  }

  async loadOskills() {
    const loading = await this.loadingCtrl.create({
      spinner: 'dots',
    });
    await loading.present();
    this.crudService.getOskills('Oskills').subscribe((res) => {
      loading.dismiss();
      this.OskillsArray = [...this.OskillsArray, ...res.Oskills];
      console.log(res);
    });
  }

  async loadOskillsWanted() {
    const loading = await this.loadingCtrl.create({
      spinner: 'dots',
    });
    await loading.present();
    this.crudService.getOskills('OskillsWanted').subscribe((res) => {
      loading.dismiss();
      this.OskillsWantedArray = [...this.OskillsWantedArray, ...res.Oskills];
      console.log(res);
    });
  }

  async loadRA() {
    const loading = await this.loadingCtrl.create({
      spinner: 'dots',
    });
    await loading.present();
    this.crudService.getRA('RA').subscribe((res) => {
      loading.dismiss();
      this.RAArray = [...this.RAArray, ...res.RA];
      console.log(res);
    });
  }

  async loadRAWanted() {
    const loading = await this.loadingCtrl.create({
      spinner: 'dots',
    });
    await loading.present();
    this.crudService.getRA('RAWanted').subscribe((res) => {
      loading.dismiss();
      this.RAWantedArray = [...this.RAWantedArray, ...res.RA];
      console.log(res);
    });
  }

  async loadProjects() {
    const loading = await this.loadingCtrl.create({
      spinner: 'dots',
    });
    await loading.present();
    this.crudService.getProjects('Projects').subscribe((res) => {
      loading.dismiss();
      this.ProjectsArray = [...this.ProjectsArray, ...res.Projects];
      console.log(res);
    });
  }

  async loadProjectsWanted() {
    const loading = await this.loadingCtrl.create({
      spinner: 'dots',
    });
    await loading.present();
    this.crudService.getProjects('ProjectsWanted').subscribe((res) => {
      loading.dismiss();
      this.ProjectsWantedArray = [...this.ProjectsWantedArray, ...res.Projects];
      console.log(res);
    });
  }

  async loadFutureProjects() {
    const loading = await this.loadingCtrl.create({
      spinner: 'dots',
    });
    await loading.present();
    this.crudService.getFutureProjects('FP').subscribe((res) => {
      loading.dismiss();
      this.FutureProjectsArray = [...this.FutureProjectsArray, ...res.FP];
      console.log(res);
    });
  }

  async loadFutureProjectsWanted() {
    const loading = await this.loadingCtrl.create({
      spinner: 'dots',
    });
    await loading.present();
    this.crudService.getFutureProjects('FPWanted').subscribe((res) => {
      loading.dismiss();
      this.FutureProjectsWantedArray = [
        ...this.FutureProjectsWantedArray,
        ...res.FP,
      ];
      console.log(res);
    });
  }

  async openModalSkills(item: any) {
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

  async openModalPex(item: any) {
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

  async openModalProj(item: any) {
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
    const modalCreateItem = await this.modalCtrl.create({
      component: CreateModalComponent,
    });
    modalCreateItem.onDidDismiss().then(() => {
      location.reload();
    });
    await modalCreateItem.present();
  }

  async deleteRA(id: number) {
    this.crudService.delete('deleteRA', id).subscribe((res) => {});
    location.reload();
  }

  async deleteSkill(id: number) {
    this.crudService.delete('deleteSkill', id).subscribe((res) => {});
    location.reload();
  }

  async deleteProject(id: number) {
    this.crudService.delete('deleteProject', id).subscribe((res) => {});
    location.reload();
  }

  async deletePSkill(id: number) {
    this.crudService.delete('deletePSkill', id).subscribe((res) => {});
    location.reload();
  }

  async deletePex(id: number) {
    this.crudService.delete('deletePex', id).subscribe((res) => {});
    location.reload();
  }

  async deleteOSkill(id: number) {
    this.crudService.delete('deleteOSkill', id).subscribe((res) => {});
    location.reload();
  }

  async deleteFutureSkill(id: number) {
    this.crudService.delete('deleteFutureSkill', id).subscribe((res) => {});
    location.reload();
  }

  ngOnInit() {
    this.loadSkill(),
      this.loadPex(),
      this.loadPS(),
      this.loadOskills(),
      this.loadRA(),
      this.loadProjects(),
      this.loadFutureProjects(),
      this.loadSkillWanted(),
      this.loadPexWanted(),
      this.loadPSWanted(),
      this.loadOskillsWanted(),
      this.loadRAWanted(),
      this.loadProjectsWanted(),
      this.loadFutureProjectsWanted();
  }

  @ViewChild(IonModal)
  modal!: IonModal;

  cancel() {
    this.modal.dismiss();
  }
}
