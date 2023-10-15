import { Component, Input, OnInit } from '@angular/core';
import { RoutingService } from '../routing.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  title: string;

  @Input() mainPage: boolean;

  constructor(public routing: RoutingService) { }

  ngOnInit(): void {
    this.title = "Lucas' projects";
  }

  changePages(): void {
    this.routing.switchPages();
  }
}
