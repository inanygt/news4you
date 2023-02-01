import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit {
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
