import { Component, OnInit } from '@angular/core';

import { NewsApiService } from 'src/app/Services/news-api-service';

@Component({
  selector: 'app-newsfeedtopic',
  templateUrl: './newsfeedtopic.component.html',
  styleUrls: ['./newsfeedtopic.component.css'],
})
export class NewsfeedtopicComponent implements OnInit {
  // urlLink: string = 'https://newsapi.org/v2/everything?q='
  // urlKey: string = '&apiKey=28708e155adf4043b69f678b8f7c75d9'
  // searchLink = this.urlLink + this.keyWord + this.urlKey;

  searchWord: string = '';
  searchData: any[] = [];
  searchTerm: string = '';
  searchDataLink: string = '';

  search() {
    this.searchWord = this.searchTerm;
    this.NewsApiService.searchLink =
      this.NewsApiService.urlLink +
      this.searchTerm +
      this.NewsApiService.urlKey;
    this.searchDataLink = this.NewsApiService.searchLink;
    this.NewsApiService.getSearch().then((data: any) => {
      this.searchData = data.articles;
    });
  }

  constructor(private NewsApiService: NewsApiService) {}

  ngOnInit(): void {}
}
