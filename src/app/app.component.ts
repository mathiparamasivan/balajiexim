import { Component, OnInit } from '@angular/core';
import { Router, NavigationStart } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'balajiexim';
  showComponent:boolean;
  
  ngOnInit() : void{}
  
  constructor(private router: Router) {
    router.events.forEach((event) => {
      if(event instanceof NavigationStart) {
          this.showComponent = event.url !== "/contact";
      }
    });
  }

}


