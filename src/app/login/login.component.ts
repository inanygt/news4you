import { Component, OnInit } from '@angular/core';
import { NwsapiService } from '../nwsapi.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  type: string = 'password';
  isText: boolean = false;
  eyeIcon: string = 'fa-eye-slash';

  userExists: boolean = false;

  email!: string;
  userName!: string;
  password!: string;

  constructor(
    private NwsapiService: NwsapiService,
    private toastr: ToastrService
  ) {}

  hideShowPass() {
    this.isText = !this.isText;
    this.isText ? (this.eyeIcon = 'fa-eye') : (this.eyeIcon = 'fa-eye-slash');
    this.isText ? (this.type = 'text') : (this.type = 'password');
  }

  loginbtn() {
    this.showSuccess();
    console.log(this.userName);
    console.log(this.password);
    this.NwsapiService.checkuser(this.userName)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  }

  showSuccess() {
    this.toastr.success('Hello world!', 'Toastr fun!');
  }

  ngOnInit(): void {}
}
