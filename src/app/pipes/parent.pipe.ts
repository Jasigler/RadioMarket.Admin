import { Pipe, PipeTransform, ɵConsole } from '@angular/core';
import { Category } from 'src/Models/Category';
import { element } from 'protractor';
import {filter} from 'rxjs/operators';

@Pipe({
  name: 'parent'
})
export class ParentPipe implements PipeTransform {

  transform(values: any): any {
  
    if(!values) return [];
    return values.filter(value => value.parent_id == null);
  } 

}
