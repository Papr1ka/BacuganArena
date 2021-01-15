import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-create-news',
  templateUrl: './admin-create-news.component.html',
  styleUrls: ['./admin-create-news.component.css']
})
export class AdminCreateNewsComponent implements OnInit {
  data : string;

  constructor() {
  }

  ngOnInit(): void {
  }

}
