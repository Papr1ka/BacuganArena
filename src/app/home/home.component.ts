import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  news = [
    {
      "id" : "2",
      "title" : "После «Мстители Финал» постаревший Росомаха вернулся к Мстителям в новом фильме",
      "content" : "После Мстители Финал создатели нового фильма Marvel решили вернуть на экраны постаревшего мутанта Росомаху в исполнении актера... После Мстители Финал создатели нового фильма Marvel решили вернуть на экраны постаревшего мутанта Росомаху в исполнении актера... После Мстители Финал создатели нового фильма Marvel решили вернуть на экраны постаревшего мутанта Росомаху в исполнении актера...",
      "timestamp" : "8 января 2021 в 20:29",
      "views" : "4885",
      "comments" : "0",
      "image" : "http://gamebomb.ru/files/galleries/001/d/dc/369015_w180.jpg"
    }
  ]

  page_news = []
  max_post = 2

  id : number;
  constructor(private route: ActivatedRoute) {
    this.id = route.snapshot.params["id"];
    if (this.id != undefined){
      if (this.id / 1 != NaN){
        let x = this.id * 10 - 9;
      }
    }
    console.log(this.news)
  }

  ngOnInit(): void {
  }

}
