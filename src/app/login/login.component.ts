import { Component, OnInit } from '@angular/core';
import {faEnvelope} from '@fortawesome/free-solid-svg-icons/faEnvelope';
import {faLock} from '@fortawesome/free-solid-svg-icons/faLock';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  faEnvelope = faEnvelope;
  faLock = faLock;
  constructor() { }

  ngOnInit(): void {
  }

}
