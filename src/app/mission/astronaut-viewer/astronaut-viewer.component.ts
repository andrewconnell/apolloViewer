import { Component, OnInit, Input } from '@angular/core';

import { AstronautService } from '../astronaut.service';

import { IAstronaut } from '../../models';

@Component({
  selector: 'app-astronaut-viewer',
  styleUrls: ['./astronaut-viewer.component.scss'],
  template: `
        <h4>{{ astronaut.first_name }} {{ astronaut.last_name }}</h4>
        <div><img src="/assets/astronauts/{{ astronaut.image }}" height="200" /></div>
        <div><em><a href="{{ astronaut.wiki_href }}" target="_blank">Wikipedia entry</a></em></div>
      `
})
export class AstronautViewerComponent implements OnInit {

  @Input()
  astronautId: string;

  astronaut: IAstronaut;

  constructor(private astronautService: AstronautService) { }

  ngOnInit() {
    // get astronaut
    this.astronaut = this.astronautService.getAstronaut(this.astronautId);
  }

}
