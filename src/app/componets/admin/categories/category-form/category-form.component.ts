import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Category} from '../../../models/category';
import Swal from "sweetalert2";

@Component({
  selector: 'app-category-form',
  templateUrl: './category-form.component.html',
  styleUrls: ['./category-form.component.css']
})
export class CategoryFormComponent implements OnInit {

  public categoryForm: FormGroup;

  @Input() category: Category;



  @Output() outPutEmitter: EventEmitter<Category>;

  constructor() {
    this.category = {name: ''};
    this.categoryForm = new FormGroup({
      name: new FormControl(this.category.name, [
        Validators.required,
        Validators.maxLength(255),
        Validators.minLength(3)]),

    });

  }

  ngOnInit(): void {

  }
  onSubmit() {


    if (this.categoryForm.valid) {
      Swal.fire({
        title: 'success!',
        text: `Hola ${this.categoryForm.value.name}, has iniciado sesión con éxito!`,
        icon: 'info',
        confirmButtonText: 'Ok'
      });


      console.log(this.categoryForm.value);

    }
  }

}
