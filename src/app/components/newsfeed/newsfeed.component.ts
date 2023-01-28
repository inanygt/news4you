import { Component, OnInit } from '@angular/core';
import { NewsApiService } from 'src/app/Services/news-api-service';

@Component({
  selector: 'app-newsfeed',
  templateUrl: './newsfeed.component.html',
  styleUrls: ['./newsfeed.component.css'],
})
export class NewsfeedComponent implements OnInit {
  newdata: any = [];
  mergedApi: any = [];

  newsdataApi =
    'https://newsdata.io/api/1/news?apikey=pub_1615436c42d2454a9e02ae00e9d51b6cb33e3&q=pegasus&language=en';
  perigon =
    'https://api.goperigon.com/v1/all?apiKey=c65b566c-05d5-4d35-ae90-279bf8b3b213';

  constructor(private NewsApiService: NewsApiService) {}

  bookmarkMe() {
    console.log('succes');
  }

  ngOnInit(): void {
    // Merge 3 apis
    this.NewsApiService.getData().then((data1) => {
      fetch(this.newsdataApi)
        .then((response) => response.json())
        .then((data2) => {
          fetch(this.perigon)
            .then((res) => res.json())
            .then((data3) => {
              // Merge the contents of the 3 JSON files
              const mergedData = Object.assign(
                data1.articles,
                data2.results,
                data3.articles
              );
              this.mergedApi = mergedData;
              console.log(this.mergedApi);
            });
        });
    });
  }
}
