import { Component, OnInit } from '@angular/core';

import { MissionService } from '../mission.service';
import { IMission } from '../../models';

@Component({
  selector: 'app-mission-list',
  templateUrl: './mission-list.component.html',
  styleUrls: ['./mission-list.component.scss']
})
export class MissionListComponent implements OnInit {

  missions: IMission[];

  constructor(private missionService: MissionService) { }

  ngOnInit() {
    this._getMissions();
  }

  private _getMissions(): void {
    this.missions = this.missionService.getMissions();
  }

  handleRemove(event: IMission) {
    this.missions = this.missions.filter((mission: IMission) => {
      return mission.id !== event.id;
    });
  }

}
