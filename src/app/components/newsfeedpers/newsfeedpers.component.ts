import { Component, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  FormBuilder,
  FormGroup,
  FormArray,
  FormControl,
  Validators,
} from '@angular/forms';
import { TopicsComponent } from '../topics/topics.component';
import { NewsApiService } from 'src/app/Services/news-api-service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-newsfeedpers',
  templateUrl: './newsfeedpers.component.html',
  styleUrls: ['./newsfeedpers.component.css'],
})
export class NewsfeedpersComponent implements OnInit {
  url = 'http://localhost:8000/api/';

  //   let storedValues = JSON.parse(localStorage.getItem('selectedValues')!);
  // console.log(storedValues);
  // console.log(storedValues[2]);

  fetchTopics() {
    let userId = localStorage.getItem('userId');
    fetch(this.url + 'topics/' + userId)
      .then((res) => res.json())
      .then((data) => {
        let topics = data.map((topic: { name: any }) => topic.name);
        console.log(topics);
        let topicApiLink: string =
          this.NewsApiService.urlLink +
          topics.join(' OR ') +
          this.NewsApiService.urlKey;
        console.log(topicApiLink);

        fetch(topicApiLink)
          .then((response) => {
            if (!response.ok) {
              throw new Error('Network response was not ok');
            }
            return response.json();
          })
          .then((data) => {
            console.log(data);

            this.topicNews = data.articles;
            console.log(this.topicNews);
          })
          .catch((error) => {
            this.toastr.warning('No topics saved')
            console.error(
              'There was a problem with the fetch operation:',
              error
            );
          });
      });
  }

  constructor(private NewsApiService: NewsApiService, private toastr: ToastrService) {

    // console.log(this.topicApiLink);
  }

  topicNews: any = [];

  // storedValues = JSON.parse(localStorage.getItem('selectedValues')!);

  // get api link with multiple keywords from topics
  // topicApiLink: string =
  //   this.NewsApiService.urlLink +
  //   this.storedValues.join(' OR ') +
  //   this.NewsApiService.urlKey;

  ngOnInit(): void {
    this.fetchTopics();

    // fetch api url with multiple keywords from topics
  }
}
