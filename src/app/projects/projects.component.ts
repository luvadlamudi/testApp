import { Component, OnInit } from '@angular/core';
import { Project } from '../project';
import { MostRecentProjectService } from '../most-recent-project.service';

@Component({
  selector: 'projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  projects: Project[] = [
  {
    projectName: 'Wizard World',
    projectLink: 'https://www.google.com/',
    dateCreated: '1/2/2021',
    imageURL: 'https://cdn.shopify.com/s/files/1/0539/4831/7877/products/wizard-emissary-tapestry-blanket-2_511x700.jpg?v=1614776001'
  }
]

  constructor(public mrProject: MostRecentProjectService) { }

  ngOnInit(): void {
    this.mrProject.setNextRecentProject(this.projects[this.projects.length - 1])
  }

}
