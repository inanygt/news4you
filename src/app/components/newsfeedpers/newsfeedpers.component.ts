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

@Component({
  selector: 'app-newsfeedpers',
  templateUrl: './newsfeedpers.component.html',
  styleUrls: ['./newsfeedpers.component.css'],
})


export class NewsfeedpersComponent implements OnInit {
  url = 'http://localhost:8000/api/';
  
  // Jorian // 
  
   topicNews : any = []

  storedValues = JSON.parse(localStorage.getItem('selectedValues')!);

  topicApiLink: string = this.NewsApiService.urlLink + this.storedValues.join(" OR ") + this.NewsApiService.urlKey


  constructor(
    private NewsApiService: NewsApiService,) {
console.log(this.topicApiLink)
    }
  
   let storedValues = JSON.parse(localStorage.getItem('selectedValues')!);
        console.log(storedValues);
        // console.log(storedValues[0]);
        // console.log(storedValues[1]);
        // console.log(storedValues[2]);


      };

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
      });
  }

  ngOnInit(): void {
    this.fetchTopics();
    
     fetch(this.topicApiLink)
  .then(response => {
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response.json();
  })
  .then(data => {
    console.log(data);

    this.topicNews = data.articles
    console.log(this.topicNews)
  })
  .catch(error => {
    console.error("There was a problem with the fetch operation:", error);
  });
  }
}
