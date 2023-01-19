import { Component, OnInit } from '@angular/core';
import { NwsapiService } from 'src/app/nwsapi.service';
import { Users } from 'src/app/users';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent implements OnInit {
  type: string = 'password';
  isText: boolean = false;
  eyeIcon: string = 'fa-eye-slash';

  users: Users[] = [];

  username!: string;
  email!: string;
  password!: string;
  cpassword!: string;
  birthdate!: Date;

  hideShowPass() {
    this.isText = !this.isText;
    this.isText ? (this.eyeIcon = 'fa-eye') : (this.eyeIcon = 'fa-eye-slash');
    this.isText ? (this.type = 'text') : (this.type = 'password');
  }

  constructor(private NwsapiService: NwsapiService) {}

  signup() {
    const newUser = {
      id: this.users.length + 1,
      name: this.username,
      email: this.email,
      password: this.password,
      birthdate: this.birthdate,
    };
    console.log(newUser);

    //
    this.NwsapiService.adduser(newUser);
  }

  ngOnInit(): void {}
}

// get request user login

// Get request api from news
