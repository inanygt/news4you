import { Component, OnInit } from '@angular/core';
import { NwsapiService } from 'src/app/Services/nwsapi.service';
import { Users } from 'src/app/users';
import { ToastrService } from 'ngx-toastr';

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

  userName!: string;
  email!: string;
  password!: string;
  cpassword!: string;
  birthdate!: Date;
  createdAt!: Date;

  date = new Date();
  day = this.date.getDate();
  month = this.date.getMonth() + 1;
  year = this.date.getFullYear();
  currentDate = `${this.year}-${this.month}-${this.day}`;

  hideShowPass() {
    this.isText = !this.isText;
    this.isText ? (this.eyeIcon = 'fa-eye') : (this.eyeIcon = 'fa-eye-slash');
    this.isText ? (this.type = 'text') : (this.type = 'password');
  }

  constructor(
    private NwsapiService: NwsapiService,
    private toastr: ToastrService
  ) {}

  showSuccess() {
    this.toastr.success('Hello world!', 'Toastr fun!');
  }

  url = 'http://localhost:8000/api/';

  signup() {
    const newUser = {
      userName: this.userName,
      email: this.email,
      password: this.password,
      birthdate: this.birthdate,
      createdAt: this.currentDate,
    };
    console.log(newUser);
    this.NwsapiService.adduser(newUser);

     this.NwsapiService.checkuser(this.userName, this.password);

    fetch(this.url + 'users/' + this.userName)
    .then((res) => res.json())
    .then((data) => {
      console.log(data[0].id);
      window.localStorage.setItem('userId', data[0].id);
      console.log(window.localStorage.getItem('userId'));
    });

  }

  // Test topics

  topicsObject = {
    sports: false,
    science: false,
    tech: false,
    crypto: false,
  };

  ngOnInit(): void {}
}

// get request user login

// Get request api from news
