import { Component, OnInit } from '@angular/core';
import { RoutingService } from '../app/routing.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  mainPage: boolean = true;

  constructor(public page: RoutingService){
  }

  ngOnInit(): void {
    this.page.mainPage.subscribe((nextValue: boolean) => {
      this.mainPage = nextValue;
    })
  }
}
