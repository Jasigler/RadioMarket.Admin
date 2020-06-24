import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup,} from '@angular/forms';
import {Router} from '@angular/router';
import { environment} from '../../environments/environment';
import {faLock} from '@fortawesome/free-solid-svg-icons/faLock';
import {faUser} from '@fortawesome/free-solid-svg-icons/faUser';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  faLock = faLock;
  faUser = faUser;
  loginForm: FormGroup;
  loginFailure = false;
  constructor(private builder: FormBuilder, private router: Router) { }

  ngOnInit(): void {
    this.loginForm = this.builder.group({
      username: '',
      password: ''
    });
  }

  async login() {
    if (this.loginForm.value.username === environment.ADMIN_USER && this.loginForm.value.password === environment.ADMIN_PASSWORD){
      await this.router.navigate(['/admin']);
    } else {
      this.loginFailure = true;
    }
  }

}
