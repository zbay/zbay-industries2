import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  homeUrl = '/';
  portfolioUrl = '/projects';
  announcementsUrl = '/announcements';
  router: Router;

  constructor(private _router: Router) {
    this.router = _router;
  }

  ngOnInit() {
  }

}
