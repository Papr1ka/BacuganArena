import { stringify } from '@angular/compiler/src/util';
import { Injectable } from '@angular/core';
import { edit, Split } from 'brace';
import { info } from 'console';
import { DataNews } from '../modules/data-news';
import { Post } from '../modules/post';

@Injectable({
  providedIn: 'root'
})
export class PaginationService {
  
  dataNews : Array<DataNews> = []

  constructor() {
    console.log("создал сервис")
    for (let i = this.dataNews.length + 1; i < 1280; i++){
      if (i !== null){
        if (i == 1277){
          this.dataNews.push({
            "id" : i,
            "title" : "кодовое слово секрет",
            "content" : "ключ",
            "timestamp" : new Date(),
            "views" : i,
            "image" : "http://gamebomb.ru/files/galleries/001/d/dc/369015_w180.jpg",
            "ref" : '/news/' + i
          })
        }
        else{
          this.dataNews.push({
            "id" : i,
            "title" : "После «Мстители Финал» постаревший Росомаха вернулся к Мстителям в новом фильме",
            "content" : "<section class='article'><p>Новости родом из другого десятилетия! <img src='https://images.stopgame.ru/uploads/users/2021/226591/r912x500/UtIVnSIN3DtbQZpAgT1Dpg/00253.0lZaVCj.jpg'>Джек из <strong>Mass Effect 2</strong> опасалась скандала в СМИ, поэтому чуть ли не в последний момент сменила персонажу ориентацию — Джек стала гетеросексуальной и могла спать только с Шепардом-мужчиной.<strong>BioWare</strong></p><p>Историю об этом в свежем интервью <a target='_blank' href='/to/?https://www.thegamer.com/mass-effect-2-jack-gay-pansexual-fox-news/'>The Gamer</a> рассказывает <u>Брайан Киндреган</u> (Brian Kindregan) — ведущий сценарист Джек, Самары и некоторых других сюжетных элементов <strong>Mass Effect 2</strong>.</p><p>Для начала немного истории. В 2008 году на канале Fox News вышел скандально известный материал, осуждающий секс в видеоиграх в целом и в <strong>Mass Effect</strong> в частности. Мол, это же игрушки, каким ужасным вещам они учат наших детей? Xbox там называли Sexbox, а видеоигры защищал <u>Джефф Кили</u> (Geoff Keighley) — он же был единственным участником дискуссии, кто играл в <strong>Mass Effect</strong> (и, кажется, кто вообще знаком с видеоиграми).</p><p>",
            "timestamp" : new Date(),
            "views" : i,
            "image" : "http://gamebomb.ru/files/galleries/001/d/dc/369015_w180.jpg",
            "ref" : '/news/' + i
          })
        }
      }
    }
  }

  getUsers(page : number, row_length : number){
    let max_page = this.get_max(row_length);
    console.log(max_page)
    let startindex = this.dataNews.length - row_length * page;
    let answer : DataNews[] = [];
    answer = this.dataNews.filter( data => {
      if (data.id <= startindex + row_length && data.id > startindex){
        return true;
      }
      else{
        return false;
      }
    }
    )
    console.log(answer);
    console.log(this.dataNews);
    return answer.reverse();
  }

  get_max(row_length : number){
    let max_page = Math.ceil(this.dataNews.length / row_length)
    return max_page;
  }

  getPage(id : number){
    let page = this.dataNews.find(page =>{
      if (page.id == id){
        return true;
      }
      else{
        return false;
      }
    })
    return page;
  }

  add_viewer(id : number){
    let page : DataNews = this.dataNews.find(page =>{
      if (page.id == id){
        return true;
      }
      else{
        return false;
      }
    }) || <DataNews>{};
    let ind = this.dataNews.indexOf(page, 0);

    let new_elem : DataNews = this.dataNews[ind];
    new_elem.views += 1;

    var start_index = ind;
    var number_of_elements_to_remove = 1;
    this.dataNews.splice(start_index, number_of_elements_to_remove, new_elem);
    console.log(this.dataNews);
    console.log("увеличил");
  }

  search(param : string){
    //search by if
    let info = this.dataNews.find( news =>{
      if (news.id.toString() == param){
        return true;
      }
      return false;
    })
    if (info != null){
      return [info , "найден элемент с id " + info.id];
    }
    else{
      return null;
    }
  }

  saveData(post : Post){
    let data : DataNews = new(DataNews);
    data.content = post.content;
    data.title = post.title;
    data.image = post.image;
    data.views = 0;
    data.timestamp = new Date();
    data.ref = '/news/' + (this.dataNews.length + 1)
    data.id = this.dataNews.length + 1
    this.dataNews.push(data);

    console.log(this.dataNews.find(news => {
      if (news.id == data.id){
        return true;
      }
      else{
        return false;
      }
    }));
  }

  editData(post : DataNews){
    let page : DataNews = this.dataNews.find(page =>{
      if (page.id == post.id){
        return true;
      }
      else{
        return false;
      }
    }) || <DataNews>{};
    let ind = this.dataNews.indexOf(page, 0);

    let new_elem : DataNews = this.dataNews[ind];
    new_elem.title = post.title;
    new_elem.content = post.content;
    new_elem.image = post.image;

    var start_index = ind;
    var number_of_elements_to_remove = 1;
    this.dataNews.splice(start_index, number_of_elements_to_remove, new_elem);

  }
}