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
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit {
  selectedTopics = {
    sports: false,
    politics: false,
    war: false,
    financial: false,
    crypto: false,
    tech: false,
    science: false,
    health: false,
  };



  saveChecked() {

    localStorage.setItem('selectedTopics', JSON.stringify(this.selectedTopics));
    // TODO: Send the data to the database
    console.log(this.selectedTopics)
  }




  user: any;

  users: any;




  constructor(private router: Router) {}

  ngOnInit() {
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
        console.log(user);
        console.log(user[0].userName);
        console.log(user[0].email);
        console.log(user[0].birthDate);
        console.log(user[0].createdAt);
        this.user = user[0];
      });


  }

  logout() {
    localStorage.clear();
    this.router.navigate(['/login']);
    }



}
