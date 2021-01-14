import { Injectable } from '@angular/core';
import { News } from './modules/news';
import { Pagenews } from './modules/pagenews';

@Injectable({
  providedIn: 'root'
})
export class PaginationService {

  global_news = new Array<News> (
    {
      id : 1,
      title : "После «Мстители Финал» постаревший Росомаха вернулся к Мстителям в новом фильме",
      content : "После Мстители Финал создатели нового фильма Marvel решили вернуть на экраны постаревшего мутанта Росомаху в исполнении актера... После Мстители Финал создатели нового фильма Marvel решили вернуть на экраны постаревшего мутанта Росомаху в исполнении актера... После Мстители Финал создатели нового фильма Marvel решили вернуть на экраны постаревшего мутанта Росомаху в исполнении актера...",
      timestamp : "8 января 2021 в 20:29",
      views : 4885,
      image : "http://gamebomb.ru/files/galleries/001/d/dc/369015_w180.jpg",
      ref : '/news/' + "1"
    }
  )

  global_pages = new Array<Pagenews> (
    {
      id : 1,
      title : "После «Мстители Финал» постаревший Росомаха вернулся к Мстителям в новом фильме",
      content : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis doloremque aspernatur possimus voluptatum, beatae obcaecati iste, non corporis in commodi provident ad consequuntur ab porro nemo culpa soluta laborum quae ducimus excepturi nesciunt, eius velit accusantium. Sunt reiciendis veniam consectetur! Vero itaque quidem nihil! Iusto, impedit voluptatibus, odio sint enim perferendis error tempora facilis blanditiis molestiae deserunt. Impedit, quasi! Debitis ad est voluptate soluta ducimus voluptatem temporibus, voluptatibus perferendis omnis veritatis a exercitationem reprehenderit explicabo dolorem reiciendis magnam minima nostrum recusandae amet expedita. Voluptatem voluptas ratione iure quibusdam doloribus unde iste ducimus eius quas autem, fuga, impedit dignissimos laborum distinctio atque sapiente saepe earum, aliquam officiis nemo delectus! Ducimus facere quaerat ab ut autem facilis ipsa sit repellendus laudantium obcaecati.",
      timestamp : "8 января 2021 в 20:29",
      views : 130,
      images : ["data:image/jpeg;base64,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"],
    }
  )


  constructor() {
    console.log("создал сервис")
    for (let i = this.global_news.length + 1; i < 22; i++){
      if (i !== null){
        this.global_news.push(
          {
            "id" : i,
            "title" : "После «Мстители Финал» постаревший Росомаха вернулся к Мстителям в новом фильме",
            "content" : "После Мстители Финал создатели нового фильма Marvel решили вернуть на экраны постаревшего мутанта Росомаху в исполнении актера... После Мстители Финал создатели нового фильма Marvel решили вернуть на экраны постаревшего мутанта Росомаху в исполнении актера... После Мстители Финал создатели нового фильма Marvel решили вернуть на экраны постаревшего мутанта Росомаху в исполнении актера...",
            "timestamp" : "8 января 2021 в 20:29",
            "views" : i,
            "image" : "http://gamebomb.ru/files/galleries/001/d/dc/369015_w180.jpg",
            "ref" : '/news/' + i.toString()
          }
        )
        this.global_pages.push(
          {
            id : i,
            title : "После «Мстители Финал» постаревший Росомаха вернулся к Мстителям в новом фильме",
            content : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis doloremque aspernatur possimus voluptatum, beatae obcaecati iste, non corporis in commodi provident ad consequuntur ab porro nemo culpa soluta laborum quae ducimus excepturi nesciunt, eius velit accusantium. Sunt reiciendis veniam consectetur! Vero itaque quidem nihil! Iusto, impedit voluptatibus, odio sint enim perferendis error tempora facilis blanditiis molestiae deserunt. Impedit, quasi! Debitis ad est voluptate soluta ducimus voluptatem temporibus, voluptatibus perferendis omnis veritatis a exercitationem reprehenderit explicabo dolorem reiciendis magnam minima nostrum recusandae amet expedita. Voluptatem voluptas ratione iure quibusdam doloribus unde iste ducimus eius quas autem, fuga, impedit dignissimos laborum distinctio atque sapiente saepe earum, aliquam officiis nemo delectus! Ducimus facere quaerat ab ut autem facilis ipsa sit repellendus laudantium obcaecati.",
            timestamp : "8 января 2021 в 20:29",
            views : i,
            images : ["data:image/jpeg;base64,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"],
          }
        )
      }
    }
  }

  getUsers(page : number, row_length : number){
    let max_page = this.get_max(row_length);
    console.log(max_page)
    let startindex = this.global_news.length - row_length * page;
    let answer : any[] = [];
    answer = this.global_news.filter( data => {
      if (data.id <= startindex + row_length && data.id > startindex){
        return true;
      }
    }
    )
    console.log(answer)
    return answer.reverse();
  }

  get_max(row_length : number){
    let max_page = Math.ceil(this.global_news.length / row_length)
    return max_page;
  }

  getPage(id : number){
    let page = this.global_pages.find(page =>{
      if (page.id == id){
        return true;
      }
    })
    return page;
  }

  add_viewer(id : number){
    let page : Pagenews = this.global_pages.find(page =>{
      if (page.id == id){
        return true;
      }
    })
    let ind = this.global_pages.indexOf(page, 0);

    let new_elem : Pagenews = this.global_pages[ind];
    new_elem.views += 1;
    let new_elem2 : News = this.global_news[ind];
    new_elem2.views += 1;

    var start_index = ind;
    var number_of_elements_to_remove = 1;
    this.global_pages.splice(start_index, number_of_elements_to_remove, new_elem);
    this.global_news.splice(start_index, number_of_elements_to_remove, new_elem2);
    console.log(this.global_pages);
    console.log(this.global_news);
    console.log("увеличил");
  }


}
