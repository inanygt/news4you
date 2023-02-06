// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-profile',
//   templateUrl: './profile.component.html',
//   styleUrls: ['./profile.component.css']
// })
// export class ProfileComponent {

//   users: any;

//   constructor() { }

//   ngOnInit() {
//     fetch('http://localhost:8000/api/users')
//       .then(response => response.json())
//       .then(data => {
//         this.users = data;
//         console.log(this.users)

//         let user = JSON.parse(localStorage.getItem('user')!);
//         console.log(user)
//         console.log(user[0].userName);
//         let username = user[0].userName
//         console.log(username)

//       });

//   }

// }

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { TopicsComponent } from '../topics/topics.component';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { subscribeOn } from 'rxjs';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';




@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})

export class ProfileComponent implements OnInit {

  // selectedTopics = {
  //   sports: false,
  //   politics: false,
  //   war: false,
  //   financial: false,
  //   crypto: false,
  //   tech: false,
  //   science: false,
  //   health: false,
  // };

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

  form = new FormGroup({
    Sports: new FormControl(false),
    // Sports: new FormControl(false),
    Politics: new FormControl(false),
    War: new FormControl(false),
    Financial: new FormControl(false),
    Crypto: new FormControl(false),
    Tech: new FormControl(false),
    Science: new FormControl(false),
    Health: new FormControl(false),
    // other formControls here
  });

  submitForm() {
    let selectedValues = Object.entries(this.form.value)
      .filter(([key, value]) => value)
      .map(([key, value]) => key);

      // selectedValues = selectedValues.filter((topic, index, self) => self.indexOf(topic) === index);
    console.log(selectedValues);
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
    });
    }

  // saveChecked() {

  //   localStorage.setItem('selectedTopics', JSON.stringify(this.selectedTopics));
  //   // TODO: Send the data to the database
  //   console.log(this.selectedTopics)
  // }




  user: any;

  users: any;




  constructor(private router: Router) {
  }

  ngOnInit(): void {
    this.fetchtopics();
    fetch('http://localhost:8000/api/users')
      .then((response) => response.json())
      .then((data) => {
        this.users = data;
        console.log(this.users);

        // let user = JSON.parse(localStorage.getItem('user')!);
        // console.log(user)
        // console.log(user[0].userName);
        // let username = user[0].userName
        // console.log(username)

        let user = JSON.parse(localStorage.getItem('user')!);
        // console.log(user);
        // console.log(user[0].userName);
        // console.log(user[0].email);
        // console.log(user[0].birthDate);
        // console.log(user[0].createdAt);
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
