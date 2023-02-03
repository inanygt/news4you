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
  }
}
