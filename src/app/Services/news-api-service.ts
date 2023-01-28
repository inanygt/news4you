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
  theNewsApi =
    'https://api.thenewsapi.com/v1/news/top?api_token=EEhf2bjsK9flsfYAOyHHndDSRz0D1uxjxVQTEeRY';
  // The news api key = EEhf2bjsK9flsfYAOyHHndDSRz0D1uxjxVQTEeRY

  newdata: any[] = [];
  constructor() {}

  // testapi() {
  //   return fetch(this.NewsCatcher, {
  //     mode: 'cors',
  //     headers: {
  //       'x-api-key': 'O63rgiLppFPpEJbqaJoakfSZs8Fp2JzvRiX6g00AC54',
  //       'User-Agent': 'My-App',
  //       Accept: '*/*',
  //     },
  //   }).then((response) => response.json());
  // }

  testapi() {
    fetch(this.theNewsApi)
      .then((res) => res.json())
      .then((data) => console.log(data.data));
  }

  getData() {
    // Merge 2 apis test

    return fetch(this.url).then((response) => response.json());

    // return fetch(this.newsdataApi).then((res) => res.json());
    // return fetch(this.url).then((res) => res.json());
  }

  urlLink: string = 'https://newsapi.org/v2/everything?q=';
  urlKey: string = '&apiKey=28708e155adf4043b69f678b8f7c75d9';
  keyWord: string = '';
  searchLink: string = this.urlLink + this.keyWord + this.urlKey;
  mergedData!: any;

  searchData: any[] = [];

  getSearch() {
    return fetch(this.searchLink).then((res) => res.json());
  }
}
