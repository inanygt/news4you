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

  constructor(private NewsApiService: NewsApiService) {}

  bookmarkMe() {
    console.log('succes');
  }

  ngOnInit(): void {
    this.NewsApiService.getData().then((data1) => {
      // Read the contents of the second JSON file
      fetch(this.newsdataApi)
        .then((response) => response.json())
        .then((data2) => {
          // Merge the contents of the two JSON files
          const mergedData = Object.assign(data1.articles, data2.results);
          this.mergedApi = mergedData;
          console.log(this.mergedApi);
        });
    });
  }
}
