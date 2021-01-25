import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataNews } from '../modules/data-news';
import { PaginationService } from '../services/pagination.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css'],
  encapsulation : ViewEncapsulation.None
})
export class NewsComponent implements OnInit {
  
  Data : DataNews;

  constructor(private route : ActivatedRoute, private pservice : PaginationService, private router : Router) {
    let id = route.snapshot.params["id"];
    this.Data = this.loadData(id);
    this.add_view(id);
  }

  ngOnInit(): void {
  }

  loadData(id : number){
    let Data = this.pservice.getPage(id);
    if (Data != null){
      console.log(this.Data)
      return Data;
    }
    else{
      this.router.navigate(["/not-found"])
      return <DataNews>{};
    }
  }

  add_view(id : number){
    this.pservice.add_viewer(id);
  }

}
