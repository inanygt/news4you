import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { TopicsComponent } from '../topics/topics.component';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { subscribeOn } from 'rxjs';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})

export class ProfileComponent implements OnInit {


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

    this.checkedTopics
      .map((tid) => new CreateSubscription(tid))
      .forEach((req) => this.saveTopics(userId, req));
      this.toastr.success('New Topics Saved');
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


  clearTopics() {
    let userId = localStorage.getItem('userId');
    fetch(this.url + 'topics/' + userId, {
    method: 'DELETE',
    headers: {
    'Content-Type': 'application/json',
    },
    }).then(() => {
    // clear the checkedTopics array after the topics are cleared from the database
    this.checkedTopics = [];
    // Show a success toast notification
    this.toastr.success('Topics Deleted');

    });
    }

  user: any;

  users: any;


  constructor(private router: Router, private toastr: ToastrService) {
  }

  ngOnInit(): void {
    this.fetchtopics();
    fetch('http://localhost:8000/api/users')
      .then((response) => response.json())
      .then((data) => {
        this.users = data;
        console.log(this.users);
        let user = JSON.parse(localStorage.getItem('user')!);
        this.user = user[0];
      });


  }

  logout() {
    localStorage.clear();
    this.router.navigate(['/login']);
    }



}

export class CreateSubscription {
  topic_id: number;
  constructor(topic_id: number) {
    this.topic_id = topic_id;
  }
}
