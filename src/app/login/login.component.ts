import { Component, OnInit } from '@angular/core';
import { NwsapiService } from '../nwsapi.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  type: string = 'password';
  isText: boolean = false;
  eyeIcon: string = 'fa-eye-slash';

  email!: string;
  userName!: string;
  password!: string;

  constructor(private NwsapiService: NwsapiService) {}

  hideShowPass() {
    this.isText = !this.isText;
    this.isText ? (this.eyeIcon = 'fa-eye') : (this.eyeIcon = 'fa-eye-slash');
    this.isText ? (this.type = 'text') : (this.type = 'password');
  }

  // loginbtn() {
  //   const newLogin = {
  //     email: this.email,
  //     password: this.password,
  //   };
  //   console.log(newLogin);
  //   // this.NwsapiService.checkuser();
  // }

  loginbtn() {
    console.log(this.userName);
    console.log(this.password);
    this.NwsapiService.checkuser(this.userName);
  }

  ngOnInit(): void {}
}
