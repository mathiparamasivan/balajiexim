import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    document.getElementById('defaultOpen2').style.background = 'rgb(183,214,100)';
    document.getElementById('pro2').style.display = 'block';
  }

  openPage(contentId,sideId,linkHide,contentHide) {
    document.getElementById(linkHide).style.background = '';
    document.getElementById(contentHide).style.display = 'none';
    document.getElementById(sideId).style.background = 'rgb(183,214,100)';
    document.getElementById(contentId).style.display = 'block';
  }

}
