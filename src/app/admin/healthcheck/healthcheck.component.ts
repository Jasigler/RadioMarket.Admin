import { Component, OnInit } from '@angular/core';
import { faCheckCircle} from '@fortawesome/free-solid-svg-icons/';
import {faExclamationCircle} from '@fortawesome/free-solid-svg-icons/';
import { HealthService} from '../../services/health.service';
import { FrameComponent } from '../frame/frame.component';

@Component({
  selector: 'app-healthcheck',
  templateUrl: './healthcheck.component.html',
  styleUrls: ['./healthcheck.component.css']
})

export class HealthcheckComponent implements OnInit {
  
  upsymbol = faCheckCircle;
  downsymbol = faExclamationCircle;
  categoryStatus: boolean;
  itemStatus: boolean;
  userStatus: boolean;
  imageStatus: boolean;
  
  constructor(private health: HealthService) {
  }

  ngOnInit(): void {
      this.health.getCategoryHealth().subscribe(data =>
        this.categoryStatus = data.toString() === 'Healthy');
      
      this.health.getItemHealth().subscribe(data => 
        this.itemStatus = data.toString() === 'Healthy');

      this.health.getImageHealth().subscribe(data => 
        this.imageStatus = data.toString() === 'Healthy');
      
      this.health.getUserHealth().subscribe(data => 
        this.userStatus = data.toString() === 'Healthy');
  }

}
