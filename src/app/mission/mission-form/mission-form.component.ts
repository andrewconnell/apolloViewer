import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import {
  IAstronaut,
  ICrew,
  IMission
} from '../../models';


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

  constructor() { }

  ngOnInit() {
  }

}
