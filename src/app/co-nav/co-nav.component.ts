import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-co-nav',
  templateUrl: './co-nav.component.html',
  styleUrls: ['./co-nav.component.css']
})
export class CoNavComponent implements OnInit {
  links = [
    {
      "name" : "Главная",
      "link" : "/home"
    },
    {
      "name" : "Последние бои",
      "link" : "/latest"
    },
    {
      "name" : "Лидеры",
      "link" : "/liders"
    },
    {
      "name" : "База данных Bacugan",
      "link" : "/glossary"
    },
    {
      "name" : "Форум",
      "link" : "/forum"
    },
    {
      "name" : "Справочник",
      "link" : "/info"
    },
    {
      "name" : "Контакты",
      "link" : "/contacts"
    }
  ]

  nav_title = "Арена"

  constructor() { }

  ngOnInit(): void {
  }

  call_menu(){
    var x = document.getElementById("mylinklist");
    if (x != null){
      if (x.className === "inner_nav"){
        x.className += " responsive";
      }
      else{
        x.className = "inner_nav";
      }
    }
  }

}
