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
  searchWord: string = '';
  // searchLink = this.urlLink + this.keyWord + this.urlKey;

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
    console.log(this.searchTerm);
    console.log(this.NewsApiService.searchLink);
    fetch(this.NewsApiService.searchLink).then((res) => res.json());
  }

  constructor(private NewsApiService: NewsApiService) {}

  ngOnInit(): void {
    this.NewsApiService.getSearch().then((data: any) => {
      // console.log(data.articles)
      this.searchData = data.articles;
      // console.log(this.searchData)
      // console.log(this.searchLink)
    });
  }
}
