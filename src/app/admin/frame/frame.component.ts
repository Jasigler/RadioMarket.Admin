import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import {HealthcheckComponent} from '../healthcheck/healthcheck.component';

@Component({
  selector: 'app-frame',
  templateUrl: './frame.component.html',
  styleUrls: ['./frame.component.css']
})
export class FrameComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
 async logout() {
  await this.router.navigate(['/']);
 }
}
