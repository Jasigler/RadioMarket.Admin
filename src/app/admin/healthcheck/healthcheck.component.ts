import { Component, OnInit } from '@angular/core';
import { faCheckCircle} from '@fortawesome/free-solid-svg-icons/';
import {faExclamationCircle} from '@fortawesome/free-solid-svg-icons/';
import { HealthService} from '../../services/health.service';

@Component({
  selector: 'app-healthcheck',
  templateUrl: './healthcheck.component.html',
  styleUrls: ['./healthcheck.component.css']
})
export class HealthcheckComponent implements OnInit {
  upsymbol = faCheckCircle;
  downsymbol = faExclamationCircle;
  categoryStatus: boolean;

  constructor(private health: HealthService) {
  }

  ngOnInit(): void {
      this.health.getCategoryHealth().subscribe(data =>
        this.categoryStatus = data.toString() === 'Healthy');
  }

}
