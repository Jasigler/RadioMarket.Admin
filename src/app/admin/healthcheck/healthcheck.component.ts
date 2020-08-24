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
  categoryStatus: string;
  categoryCount: number;
 
  itemStatus: any;
  itemDatabase: any;
  itemMemory: any; 
  userStatus: any;
  imageStatus: any;
  
  constructor(private health: HealthService) {
  }

  ngOnInit(): void {
      this.health.getCategoryHealth().subscribe(data =>
        this.categoryStatus = data);
      
      this.health.getItemHealth().subscribe(data => 
        this.itemStatus = data);
      
      this.health.getUserHealth().subscribe(data => 
        this.userStatus = data);

      this.health.getImageHealth().subscribe(data =>
       this.imageStatus = data); 
  }

}
