import { Component, OnInit } from '@angular/core';
import {FrameComponent} from '../frame/frame.component';
import { CategoryService } from 'src/app/services/category.service';
import { Observable } from 'rxjs';
import {faEdit} from '@fortawesome/free-solid-svg-icons/faEdit';
import {faTrash} from '@fortawesome/free-solid-svg-icons/fatrash';
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons/faPlusCircle'
import { CategoryUpdate } from 'src/Models/CategoryUpdate';
import { FormBuilder, FormGroup} from '@angular/forms';
import { Category } from '../../../Models/Category';
import { NewCategory} from '../../../Models/NewCategory';
import { map, filter } from 'rxjs/operators';


@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
 
  categories: Observable<any[]>
  parentCategories: Observable<any[]>
  currentCategory: Category;
  editForm: FormGroup;
  addForm: FormGroup;

  editSymbol = faEdit;
  addSymbol = faPlusCircle;
  delteSymbol = faTrash;
  
  isWorking = false;
  editModalOpen = false;
  editSuccess = false;
  addModalOpen = false;

  
  constructor(private builder: FormBuilder,
    private categoryService: CategoryService) { }

  ngOnInit(): void {
    this.categories = this.categoryService.getCategories()
    
    this.editForm = this.builder.group({
      name: '',
      parent: null,
      active: null
    });
    this.addForm = this.builder.group({
      name: '', 
      parent: null,
      active: null
    })
  }

  openEditModal() {
    this.editModalOpen = true;
  }

  closeEditModal() {
    this.editModalOpen = false;
  }

  openAddModal() {
    this.addModalOpen = true;
  }

  closeAddModal() {
    this.addModalOpen = false;
  }


  setCategoryInfo(category: Category) {
   this.currentCategory = category
   console.log(this.currentCategory);
   console.log(this.currentCategory.is_active); 
  }

  async updateObservableList() {
    this.categories = await this.categoryService.getCategories();
  }

  async updateParentObservableList() {
    this.parentCategories = this.categories
      .pipe(
      map(items => items.filter(item => item.attending)),
      filter(items => items && items.length > 0)
    ); 
  }

  async updateCategory() {
    this.isWorking = true;

    let changes = new CategoryUpdate;

    if (this.editForm.value.name !== ''){
      changes.name = this.editForm.value.name
    }

    if (this.editForm.value.parent !== null) {
      changes.parent_id = this.editForm.value.parent;
    }

    if (this.editForm.value.active !== null) {
      changes.is_active = this.editForm.value.active
    }

    await this.categoryService.updateCategory(this.currentCategory.category_id,
      changes);
    
    this.categories = await this.categoryService.getCategories();
    await this.updateObservableList();
    this.isWorking = false;
    this.closeEditModal();

  }

  async addCategory() {
    this.isWorking = true;

    let category = new NewCategory();
    category.name = this.addForm.value.name;
    category.is_active = this.addForm.value.is_active
    if (this.addForm.value.parent_id != null) {
      category.parent_id = this.addForm.value.parent_id;
    }

    await this.categoryService.addCategory(category);
    
    await this.updateObservableList();

    this.isWorking = false;
    this.addModalOpen = false;
  }


}
