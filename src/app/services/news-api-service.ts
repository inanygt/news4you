import { Injectable, NgModule } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { getLocaleDateFormat } from '@angular/common';


@Injectable({
  providedIn: 'root'
})
export class NewsApiService {
 url: string = 'https://newsapi.org/v2/everything?q=keyword&apiKey=28708e155adf4043b69f678b8f7c75d9'

 newdata: any [] =[]
 constructor(){}

 getData(){

  return fetch(this.url).then(res => res.json())


 }




  // .then(data => console.log(data))


}


