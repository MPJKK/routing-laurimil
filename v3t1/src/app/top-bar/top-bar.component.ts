import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.scss']
})
export class TopBarComponent implements OnInit {

  navLinks = [
    {
      path: 'setup',
      label: 'Setup'
    },
    {
      path: 'routes',
      label: 'Label'
    }
  ]

  constructor() { }

  ngOnInit() {
  }

}
