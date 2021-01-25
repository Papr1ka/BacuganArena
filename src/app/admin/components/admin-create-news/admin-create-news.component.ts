import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Post } from 'src/app/modules/post';
import { PaginationService } from 'src/app/services/pagination.service';

@Component({
  selector: 'app-admin-create-news',
  templateUrl: './admin-create-news.component.html',
  styleUrls: ['./admin-create-news.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class AdminCreateNewsComponent implements OnInit {
  post : Post = new(Post);

  constructor(private sanitizer : DomSanitizer, private pservise : PaginationService) {
    this.post.content = "//type your template here";
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

  saveData(post : Post){
    this.pservise.saveData(post);
  }


  ngOnInit(){
  }
  setEditorContent(event : any) {
    // console.log(event, typeof event);
    console.log(this.post);
  }

}
