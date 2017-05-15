import { Component } from '@angular/core';

import { INav } from "./models";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app works!';

  public nav: INav[] = [
    { link: '/', name: 'Home', exact: true },
    { link: '/missions', name: 'Missions', exact: true },
    { link: '/404', name: '404', exact: false },
  ];
}
