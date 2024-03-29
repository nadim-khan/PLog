import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-view',
  templateUrl: './main-view.component.html',
  styleUrls: ['./main-view.component.css']
})
export class MainViewComponent implements OnInit {
  showSpinner = false;
  data;
  constructor() { }

  ngOnInit() {
  }
  loadIt() {
    setTimeout(() => {
      this.showSpinner = false;
      this.data = 'dataLoaded';
    }, 5000 );
  }

}
