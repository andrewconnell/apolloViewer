import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import {
  IAstronaut,
  ICrew,
  IMission
} from '../../models';

import { AstronautService } from '../astronaut.service';

@Component({
  selector: 'app-mission-form',
  templateUrl: './mission-form.component.html',
  styleUrls: ['./mission-form.component.scss']
})
export class MissionFormComponent implements OnInit {

  @Input()
  detail: IMission;

  @Output()
  addCrew: EventEmitter<ICrew> = new EventEmitter<ICrew>();

  public newCrewMember: ICrew = {};

  public crewRoles: string[] = [
    'Commander',
    'Pilot',
    'Sr Pilot',
    'Command Module Pilot',
    'Lunar Module Pilot'
  ];
  public astronauts: IAstronaut[] = [];

  constructor(private astronautService: AstronautService) { }

  ngOnInit() {
    this.astronauts = this.astronautService.getAstronauts();
  }

  public onCrewChange(role: string): void {
    if (role && role.length > 0) {
      this.newCrewMember.role = role;
    }
  }

  public onAstronautChange(astronautId: string): void {
    if (astronautId && astronautId.length > 0) {
      this.newCrewMember.astronaut_id = astronautId;
    }
  }

  public onAddAstronaut(): void {
    if (this.newCrewMember.role && this.newCrewMember.role.length > 0
      && this.newCrewMember.astronaut_id && +this.newCrewMember.astronaut_id > 0) {
      // emit new crew member
      this.addCrew.emit(this.newCrewMember);
      // reset crew member
      this.newCrewMember = {};
    }
  }

}
