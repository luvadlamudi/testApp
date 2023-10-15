import { Injectable } from '@angular/core';
import { Project } from './project';

@Injectable({
  providedIn: 'root'
})
export class MostRecentProjectService {

  public mostRecentProject: Project = {};

  constructor() { }

  setNextRecentProject(project: Project): void {
    this.mostRecentProject = project;
  }
}
