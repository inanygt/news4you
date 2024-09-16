import { Component, OnInit } from '@angular/core';
import { NwsapiService } from 'src/app/Services/nwsapi.service';
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

  url = 'http://localhost:8000/api/';

  loginbtn() {
    console.log(this.userName);
    console.log(this.password);
    localStorage.setItem('userName', this.userName);

    this.NwsapiService.checkuser(this.userName, this.password);

    // Get user id
    fetch(this.url + 'users/' + this.userName)
      .then((res) => res.json())
      .then((data) => {
        console.log(data[0].id);
        window.localStorage.setItem('userId', data[0].id);
        console.log(window.localStorage.getItem('userId'));
      });
  }

  ngOnInit(): void {}
}
