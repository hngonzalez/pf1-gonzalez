import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  curView?: string;


  constructor() { }

  ngOnInit(): void {
  }

  onCHangeView(tab: string) {
    this.curView = tab;
  }

}
