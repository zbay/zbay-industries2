import { Component, OnInit } from '@angular/core';

import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  headshotUrl = `${environment.baseUrl}/assets/images/zachwilliamsheadshot.jpg`;

  constructor() { }

  ngOnInit() {
  }

}
