import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Pagenews } from '../modules/pagenews';
import { PaginationService } from '../pagination.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {
  
  Data : Pagenews;

  constructor(private route : ActivatedRoute, private pservice : PaginationService, private router : Router) {
    let id = route.snapshot.params["id"];
    this.loadData(id);
    this.add_view(id);
  }

  ngOnInit(): void {
  }

  loadData(id : number){
    let Data = this.pservice.getPage(id);
    if (Data != null){
      this.Data = Data;
      console.log(this.Data)
    }
    else{
      this.router.navigate(["/not-found"])
    }
  }

  add_view(id : number){
    this.pservice.add_viewer(id);
  }

}
