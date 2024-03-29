import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

import { IMission } from '../../models';

@Component({
  selector: 'app-mission-summary',
  templateUrl: './mission-summary.component.html',
  styleUrls: ['./mission-summary.component.scss']
})
export class MissionSummaryComponent implements OnInit {

  @Input()
  mission: IMission;

  @Output()
  remove: EventEmitter<IMission> = new EventEmitter<IMission>();

  public editing: boolean = false;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  onToggleEdit() {
    this.editing = !this.editing;
  }

  onSummaryChange(value: string) {
    this.mission.summary = value;
  }

  onRemove() {
    this.remove.emit(this.mission);
  }

  onViewMission() {
    this.router.navigate(['/missions', this.mission.id]);
  }

}
