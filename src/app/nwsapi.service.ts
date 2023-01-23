import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root',
})
export class NwsapiService {
  constructor(private toastr: ToastrService) {}

  url = 'http://localhost:8000/api/';

  // Get all users
  getusers() {
    return fetch(this.url + 'users')
      .then((res) => res.json())
      .then((data) => console.log(data));
  }

  // Get user at login
  checkuser(userName: string) {
    return fetch(this.url + 'users/' + userName);
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
      }
      if (res.status == 500) {
        this.toastr.warning('username already exists');
      } else {
        this.toastr.warning('Something went wrong');
      }
    });
  }
}
