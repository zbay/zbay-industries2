import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-portfolio-item',
  templateUrl: './portfolio-item.component.html',
  styleUrls: ['./portfolio-item.component.scss']
})
export class PortfolioItemComponent implements OnInit {

  @Input() caption: string;
  @Input() date: string;
  @Input() thumbnail: string;
  @Input() url: string;

  constructor() { }

  ngOnInit() {
  }

}
