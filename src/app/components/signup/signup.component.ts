import { Component, OnInit } from '@angular/core';
import { NwsapiService } from 'src/app/nwsapi.service';
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

  signup() {
    this.showSuccess();
    const newUser = {
      // id: this.users.length + 1,
      userName: this.userName,
      email: this.email,
      password: this.password,
      birthdate: this.birthdate,
      createdAt: this.currentDate,
    };
    console.log(newUser);

    //
    this.NwsapiService.adduser(newUser);
  }

  ngOnInit(): void {}
}

// get request user login

// Get request api from news
