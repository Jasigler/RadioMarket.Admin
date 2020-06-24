import { Component, OnInit } from '@angular/core';
import { faCheckCircle} from '@fortawesome/free-solid-svg-icons/';
import {faExclamationCircle} from '@fortawesome/free-solid-svg-icons/';
import { HealthService} from '../../services/health.service';
import {map} from 'rxjs/operators';
import {pipe, Subscription} from 'rxjs';
import {formatNumber} from '@angular/common';

@Component({
  selector: 'app-healthcheck',
  templateUrl: './healthcheck.component.html',
  styleUrls: ['./healthcheck.component.css']
})
export class HealthcheckComponent implements OnInit {
  upsymbol = faCheckCircle;
  downsymbol = faExclamationCircle;
  categoryStatus;
  test;


  constructor(private health: HealthService) {
  }

  ngOnInit(): void {
    this.categoryStatus = this.health.getCategoryHealth().subscribe();
    console.log(this.categoryStatus.ResponseHeader);
    this.categoryStatus === 'Healthy' ? this.test = true : this.test = false;
    console.log(this.test);
  }

}
