import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { from } from 'rxjs';
import { Router } from '@angular/router'
import { PaginationService } from '../services/pagination.service';
import { DataNews } from '../modules/data-news';

@Component({
  selector: 'app-co-news',
  templateUrl: './co-news.component.html',
  styleUrls: ['./co-news.component.css']
})
export class CoNewsComponent implements OnInit {


  news : Array<DataNews>;
  items_per_page = 10; 
  max_page : number;
  page = 1;
  pages : any[] = [];
  pagesToShow = 7;

  constructor(private route: ActivatedRoute, private pservice : PaginationService) {
    this.news = pservice.getUsers(1, this.items_per_page);
    this.max_page = pservice.get_max(this.items_per_page);
    for (let i = 1; i < this.max_page + 1; i++){
      this.pages.push(i)
    }
  }

  ngOnInit(): void {
  }


  changePage(page : number){
    this.news = this.pservice.getUsers(page, this.items_per_page);
    this.page = page;
  }

  changePageNext(){
    if (this.page < this.max_page){
      this.news = this.pservice.getUsers(this.page + 1, this.items_per_page);
    this.page = this.page + 1
    }
  }

  changePagePrevious(){
    if (this.page > 1){
      this.news = this.pservice.getUsers(this.page - 1, this.items_per_page);
    this.page = this.page - 1
    }
  }

  getPages(): number[] {
    const c = this.max_page;
    const p = this.page || 1;
    const pagesToShow = this.pagesToShow || 9;
    const pages: number[] = [];
    pages.push(p);
    const times = pagesToShow - 1;
    for (let i = 0; i < times; i++) {
      if (pages.length < pagesToShow) {
        if (Math.min.apply(null, pages) > 1) {
          pages.push(Math.min.apply(null, pages) - 1);
        }
      }
      if (pages.length < pagesToShow) {
        if (Math.max.apply(null, pages) < c) {
          pages.push(Math.max.apply(null, pages) + 1);
        }
      }
    }
    pages.sort((a, b) => a - b);
    return pages;
  }


}
