import { Component, OnInit } from '@angular/core';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons/';
import { faExclamationCircle } from '@fortawesome/free-solid-svg-icons/';
import { HealthService } from '../../services/health.service';
import { ItemService } from '../../services/item.service';
import { FrameComponent } from '../frame/frame.component';
import { Observable } from 'rxjs';
import { CategoryService } from 'src/app/services/category.service';
import { UserService } from 'src/app/services/user.service';

@Component({
	selector: 'app-healthcheck',
	templateUrl: './healthcheck.component.html',
	styleUrls: ['./healthcheck.component.css'],
})
export class HealthcheckComponent implements OnInit {
	upsymbol = faCheckCircle;
	downsymbol = faExclamationCircle;

	categoryCount: number;
	itemCount: number;
	userCount: any;

	categoryStatus: any;
	itemStatus: any;
	userStatus: any;
	imageStatus: any;

	constructor(
		private health: HealthService,
		private item: ItemService,
		private user: UserService
	) {}

	ngOnInit(): void {
		this.health.getCategoryHealth().subscribe((data) => (this.categoryStatus = data));

		this.health.getItemHealth().subscribe((data) => (this.itemStatus = data));

		this.health.getUserHealth().subscribe((data) => (this.userStatus = data));

		this.health.getImageHealth().subscribe((data) => (this.imageStatus = data));

		this.item.getCount().subscribe((data) => (this.itemCount = data));

		this.user.getUserCount().subscribe((data) => (this.userCount = data));
	}

	public isHealthy(element: string): boolean {
		return element === 'Healthy';
	}
}
