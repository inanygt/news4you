import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import * as bcrypt from 'bcryptjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class NwsapiService {
  constructor(private toastr: ToastrService, private router: Router) {}

  url = 'http://localhost:8000/api/';

  // Get all users
  // make camelcase ->
  getusers() {
    return fetch(this.url + 'users')
      .then((res) => res.json())
      .then((data) => console.log(data));
  }

  // Get user at login
  checkuser(userName: string, password: string) {
    return (
      fetch(this.url + 'users/' + userName)
        .then((response) => {
          if (!response.ok) throw new Error(response.statusText);
          return response.json();
        })
        // Compare hashed password
        .then((data) => {
          bcrypt.compare(password, data[0].password, (err, res) => {
            if (res) {
              window.localStorage.setItem('username', userName);
              window.localStorage.setItem('userId', data[0].id);
              this.toastr.success('logged in successfully');
              console.log('succes');
              this.router.navigate(['/newsFeed']);
            } else {
              this.toastr.warning('Whoops', 'Something went wrong');
            }
          });
          console.log(data[0].password);
          console.log(data);
          localStorage.setItem('user', JSON.stringify(data));
        })
        .catch((error) => {
          if (error.message === 'User not found')
            this.toastr.error('User not found', 'Unable to login');
        })
    );
  }

  // add user at signup
  adduser(newUser: any) {
    fetch(this.url + 'users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newUser),
    }).then((res) => {
      if (res.status == 201) {
        this.toastr.success('user succesfully created');
        this.router.navigate(['/topics']);
      } else {
        this.toastr.warning('Whoops', 'Something went wrong');
      }
    });
  }
}
