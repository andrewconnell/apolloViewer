import { Component, OnInit, Input } from '@angular/core';

import { IMission } from '../../models';

@Component({
  selector: 'app-mission-summary',
  templateUrl: './mission-summary.component.html',
  styleUrls: ['./mission-summary.component.scss']
})
export class MissionSummaryComponent implements OnInit {

  @Input()
  mission: IMission;

  public editing: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  onToggleEdit() {
    this.editing = !this.editing;
  }

  onSummaryChange(value: string) {
    this.mission.summary = value;
  }

}
