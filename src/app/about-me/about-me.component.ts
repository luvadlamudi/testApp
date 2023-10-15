import { Component, OnInit } from '@angular/core';
import { MostRecentProjectService } from '../most-recent-project.service';
import { Project } from '../project';
import { RoutingService } from '../routing.service';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss']
})
export class AboutMeComponent implements OnInit {

  name: string = "Lucas";
  age: number = 14;
  grade: number | string = "9th";
  mrProject: Project;

  constructor(public routing: RoutingService, public recent: MostRecentProjectService) { }

  ngOnInit(): void {
    this.mrProject = this.recent.mostRecentProject;
  }

  goBack(): void {
    this.routing.switchPages();
  }
}
