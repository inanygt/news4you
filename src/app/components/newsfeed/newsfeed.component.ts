import { Component, OnInit } from '@angular/core';
import { NewsApiService } from 'src/app/Services/news-api-service';

@Component({
  selector: 'app-newsfeed',
  templateUrl: './newsfeed.component.html',
  styleUrls: ['./newsfeed.component.css'],
})
export class NewsfeedComponent implements OnInit {
  newdata: any = [];

  constructor(private NewsApiService: NewsApiService) {}

  bookmarkMe() {
    console.log('succes');
  }

  ngOnInit(): void {
    this.NewsApiService.getData().then((data: any) => {
      console.log((this.newdata = data.articles));
      console.log(this.newdata);
    });
  }
}
