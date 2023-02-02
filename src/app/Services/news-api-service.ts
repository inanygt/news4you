import { Injectable, NgModule } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { getLocaleDateFormat } from '@angular/common';

import { NewsfeedtopicComponent } from '../components/newsfeedtopic/newsfeedtopic.component';

@Injectable({
  providedIn: 'root',
})
export class NewsApiService {
  url: string =
    'https://newsapi.org/v2/everything?q=keyword&apiKey=712dd0a6c8324f769ff3b97bd5590776';
  // 712dd0a6c8324f769ff3b97bd5590776 // Api jorian
  // 28708e155adf4043b69f678b8f7c75d9 // Api inan // Back up

  newsdataApi =
    'https://newsdata.io/api/1/news?apikey=pub_1615436c42d2454a9e02ae00e9d51b6cb33e3&q=pegasus&language=en';
  NewsCatcher =
    'https://api.newscatcherapi.com/v2/search?q=Apple&from=2021/12/15&countries=CA&page_size=1';
  // Api key newscatcher // O63rgiLppFPpEJbqaJoakfSZs8Fp2JzvRiX6g00AC54
  perigon =
    'https://api.goperigon.com/v1/all?apiKey=c65b566c-05d5-4d35-ae90-279bf8b3b213';

  //  inankey : 712dd0a6c8324f769ff3b97bd5590776
  // joriankey : 28708e155adf4043b69f678b8f7c75d9
  newdata: any[] = [];
  constructor() {}


  getData() {
    return fetch(this.url).then((response) => response.json());
  }

  storedValues = JSON.parse(localStorage.getItem('selectedValues')!);

  urlLink: string = 'https://newsapi.org/v2/everything?q=';
  urlKey: string = '&apiKey=712dd0a6c8324f769ff3b97bd5590776';
  keyWord: string = '';
  searchLink: string = this.urlLink + this.keyWord + this.urlKey;
  mergedData!: any;

  // topicApiLink: string = this.urlLink + this.storedValues.join(" AND ") + this.urlKey

//   let link = "https://api.example.com/" + myArray.join(" And ") + "/apikey";
// console.log(link);

  searchData: any[] = [];

  getSearch() {
    return fetch(this.searchLink).then((res) => res.json());
  }

  // getTopicApi(){
  //   return fetch(this.topicApiLink).then((res) => res.json());
  //   console.log(this.topicApiLink)



  // }
}
