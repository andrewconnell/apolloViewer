import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MissionListComponent } from './mission-list/mission-list.component';
import { MissionService } from './mission.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    MissionListComponent
  ],
  exports: [
    MissionListComponent
  ],
  providers: [MissionService]
})
export class MissionModule { }
