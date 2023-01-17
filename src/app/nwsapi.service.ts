import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class NwsapiService {
  constructor() {}

  url = 'http://localhost:8000/api/';

  // Get all users
  getusers() {
    return fetch(this.url + 'users')
      .then((res) => res.json())
      .then((data) => console.log(data));
  }
}
