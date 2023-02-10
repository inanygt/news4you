import { Component, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  FormBuilder,
  FormGroup,
  FormArray,
  FormControl,
  Validators,
} from '@angular/forms';
import { subscribeOn } from 'rxjs';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-topics',
  templateUrl: './topics.component.html',
  styleUrls: ['./topics.component.css'],
})
export class TopicsComponent implements OnInit {
  constructor( private toastr: ToastrService) {}

  // Testing //

  checkedTopics: number[] = [];

  getTopicId(event: any) {
    if (event.target.checked) {
      this.checkedTopics.push(event.target.value);
    } else {
      // remove again if unchecked
      this.checkedTopics = this.checkedTopics.filter(
        (number: number) => number != event.target.value
      );
    }
  }

  onSubmit() {
    // Get user id
    let userId = localStorage.getItem('userId');
    console.log(userId);
    console.log(this.checkedTopics);
    this.toastr.success('Topics saved')

    this.checkedTopics
      .map((tid) => new CreateSubscription(tid))
      .forEach((req) => this.saveTopics(userId, req));
  }

  saveTopics(userId: any, req: CreateSubscription) {
    fetch(this.url + 'topics/' + userId, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(req),
    });
  }


  url = 'http://localhost:8000/api/';
  topics!: any;

  fetchtopics() {
    fetch(this.url + 'topics')
      .then((res) => res.json())
      .then((data) => {
        this.topics = data;
      });
  }


  ngOnInit(): void {
    this.fetchtopics();
  }
}

export class CreateSubscription {
  topic_id: number;
  constructor(topic_id: number) {
    this.topic_id = topic_id;
  }
}
