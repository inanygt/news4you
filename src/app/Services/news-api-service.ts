import { Injectable, NgModule } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { getLocaleDateFormat } from '@angular/common';

import { NewsfeedtopicComponent } from '../components/newsfeedtopic/newsfeedtopic.component';

@Injectable({
  providedIn: 'root',
})
export class NewsApiService {
  url: string =
    'https://newsapi.org/v2/everything?q=keyword&apiKey=28708e155adf4043b69f678b8f7c75d9';

  newdata: any[] = [];
  constructor() {}

  getData() {
    return fetch(this.url).then((res) => res.json());
  }

  urlLink: string = 'https://newsapi.org/v2/everything?q=';
  urlKey: string = '&apiKey=28708e155adf4043b69f678b8f7c75d9';
  keyWord: string = '';
  searchLink: string = this.urlLink + this.keyWord + this.urlKey;

  searchData: any[] = [];

  // search() {}

  getSearch() {
    return fetch(this.searchLink).then((res) => res.json());
  }
}

// export class newsfeedtopics {
//   urlLink: string = 'https://newsapi.org/v2/everything?q='
//   urlKey: string = '&apiKey=28708e155adf4043b69f678b8f7c75d9'
//   keyWord: string = 'bitcoin';
//   searchLink = this.urlLink + this.keyWord + this.urlKey;

//   searchData: any [] = []
//   constructor(){}

//   getSearch(){
//     return fetch(this.searchLink).then(res => res.json)
//   }
