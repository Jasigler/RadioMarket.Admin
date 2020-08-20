import { Component, OnInit } from '@angular/core';
import {FrameComponent} from '../frame/frame.component';
import { CategoryService } from 'src/app/services/category.service';
import { Category } from '../../../Models/Category';
import { Observable } from 'rxjs';
import {faEdit} from '@fortawesome/free-solid-svg-icons/faEdit';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  
  editSymbol = faEdit;
  categories: Observable<any[]>
  editModalOpen = false;
  working = false;

  constructor(private category: CategoryService) { }

  ngOnInit(): void {
    this.categories = this.category.getCategories();

  }

  openEditModal() {
    this.editModalOpen = true;
    console.log(this.editModalOpen);
  }
  
  closeEditModal() {
    this.editModalOpen = false;
  }

}
