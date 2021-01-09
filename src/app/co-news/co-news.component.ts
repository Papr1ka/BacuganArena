import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { from } from 'rxjs';
import { Router } from '@angular/router'

@Component({
  selector: 'app-co-news',
  templateUrl: './co-news.component.html',
  styleUrls: ['./co-news.component.css']
})
export class CoNewsComponent implements OnInit {

  news = [
    {
      "id" : "2",
      "title" : "После «Мстители Финал» постаревший Росомаха вернулся к Мстителям в новом фильме",
      "content" : "После Мстители Финал создатели нового фильма Marvel решили вернуть на экраны постаревшего мутанта Росомаху в исполнении актера... После Мстители Финал создатели нового фильма Marvel решили вернуть на экраны постаревшего мутанта Росомаху в исполнении актера... После Мстители Финал создатели нового фильма Marvel решили вернуть на экраны постаревшего мутанта Росомаху в исполнении актера...",
      "timestamp" : "8 января 2021 в 20:29",
      "views" : "4885",
      "comments" : "0",
      "image" : "http://gamebomb.ru/files/galleries/001/d/dc/369015_w180.jpg"
    },
    {
      "id" : "1",
      "title" : "После «Мстители Финал» постаревший Росомаха вернулся к Мстителям в новом фильме",
      "content" : "После Мстители Финал создатели нового фильма Marvel решили вернуть на экраны постаревшего мутанта Росомаху в исполнении актера...",
      "timestamp" : "8 января 2021 в 20:29",
      "views" : "4885",
      "comments" : "0",
      "image" : "http://gamebomb.ru/files/galleries/001/d/dc/369015_w180.jpg"
    }
  ]
  
  id : number;

  constructor(private route: ActivatedRoute, private router : Router) {
    this.id = route.snapshot.params["id"];
    if (this.id != undefined){
      if (isNaN(this.id / 1) == false){
        console.log("число")
      }
      else{
        this.router.navigate(["/not_found"])
      }
      console.log(this.id)
    }
    for (var i = 0; i < 20; i++){
      this.news.push(
        {
          "id" : "2",
          "title" : "После «Мстители Финал» постаревший Росомаха вернулся к Мстителям в новом фильме",
          "content" : "После Мстители Финал создатели нового фильма Marvel решили вернуть на экраны постаревшего мутанта Росомаху в исполнении актера... После Мстители Финал создатели нового фильма Marvel решили вернуть на экраны постаревшего мутанта Росомаху в исполнении актера... После Мстители Финал создатели нового фильма Marvel решили вернуть на экраны постаревшего мутанта Росомаху в исполнении актера...",
          "timestamp" : "8 января 2021 в 20:29",
          "views" : "4885",
          "comments" : "0",
          "image" : "http://gamebomb.ru/files/galleries/001/d/dc/369015_w180.jpg"
        }
      )
    }
    console.log(this.news)
  }

  ngOnInit(): void {
  }

  get_news(page : number){
  }



}
