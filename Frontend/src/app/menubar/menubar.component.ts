import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menubar',
  templateUrl: './menubar.component.html',
  styleUrls: ['./menubar.component.css']
})
export class MenubarComponent implements OnInit {
  opened = false;
  constructor() { }

  ngOnInit() {
  }
  log(state) {
    console.log(state);
  }

}
