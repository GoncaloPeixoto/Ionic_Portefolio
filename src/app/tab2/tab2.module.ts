import { UpdateModalComponent } from './../modal/update-modal/update-modal.component';
import { RemoveModalComponent } from './../modal/remove-modal/remove-modal.component';
import { CreateModalComponent } from './../modal/create-modal/create-modal.component';
import { ProjectsModalComponent } from './../modal/projects-modal/projects-modal.component';
import { PersonalExModalComponent } from './../modal/personal-ex-modal/personal-ex-modal.component';
import { AcademicSkillsModalComponent } from './../modal/academic-skills-modal/academic-skills-modal.component';
import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab2Page } from './tab2.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { Tab2PageRoutingModule } from './tab2-routing.module';

import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    Tab2PageRoutingModule,
    TranslateModule,
  ],
  declarations: [Tab2Page,AcademicSkillsModalComponent,PersonalExModalComponent,ProjectsModalComponent,CreateModalComponent,RemoveModalComponent,UpdateModalComponent],
  entryComponents:[
    AcademicSkillsModalComponent,
    PersonalExModalComponent,
    ProjectsModalComponent,
    CreateModalComponent,
    RemoveModalComponent,
    UpdateModalComponent,
  ]
})
export class Tab2PageModule {}
