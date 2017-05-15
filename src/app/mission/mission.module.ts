import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { MaterialModule } from '../material.module';

import { MissionListComponent } from './mission-list/mission-list.component';
import { MissionService } from './mission.service';
import { MissionSummaryComponent } from './mission-summary/mission-summary.component';
import { MissionViewerComponent } from './mission-viewer/mission-viewer.component';
import { MissionFormComponent } from './mission-form/mission-form.component';
import { AstronautService } from './astronaut.service';
import { AstronautViewerComponent } from './astronaut-viewer/astronaut-viewer.component';
import { NasaImageryService } from './nasa-imagery.service';

const routes: Routes = [
  {
    path: 'missions', children: [
      { path: '', component: MissionListComponent },
      { path: ':id', component: MissionViewerComponent }
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
    MaterialModule
  ],
  declarations: [
    MissionListComponent,
    MissionSummaryComponent,
    MissionViewerComponent,
    MissionFormComponent,
    AstronautViewerComponent
  ],
  exports: [
    MissionListComponent
  ],
  providers: [MissionService, AstronautService, NasaImageryService]
})
export class MissionModule { }
