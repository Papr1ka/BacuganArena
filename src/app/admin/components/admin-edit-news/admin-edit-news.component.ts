import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { DataNews } from 'src/app/modules/data-news';
import { Post } from 'src/app/modules/post';
import { PaginationService } from 'src/app/services/pagination.service';

@Component({
  selector: 'app-admin-edit-news',
  templateUrl: './admin-edit-news.component.html',
  styleUrls: ['./admin-edit-news.component.css']
})
export class AdminEditNewsComponent implements OnInit {
  post : DataNews = new(DataNews);
  param : string = "";

  constructor(private sanitizer : DomSanitizer, private pservise : PaginationService) {
    this.post.content = "//type your template here";
  }

  search(param : string){
    let info = this.pservise.search(param);
    if (info != null){
      this.load(info);
    }
  }

  load(info : DataNews){
    this.post = info[0];

    alert(info[1])
  }

  getData(){
    return this.sanitizer.bypassSecurityTrustHtml(this.post.content);
  }
  
  codeMirrorOptions: any = {
  theme: 'material',
  mode: 'application/ld+json',
  lineNumbers: true,
  lineWrapping: true,
  foldGutter: true,
  gutters: ['CodeMirror-linenumbers', 'CodeMirror-foldgutter', 'CodeMirror-lint-markers'],
  autoCloseBrackets: true,
  matchBrackets: true,
  lint: true
};

  editData(post : DataNews){
    this.pservise.editData(post);
    alert("успешно изменено")
  }


  ngOnInit(){
  }
  setEditorContent(event : any) {
    // console.log(event, typeof event);
    console.log(this.post);
  }
}
