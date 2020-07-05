import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router, UrlSerializer} from '@angular/router';
import Swal from 'sweetalert2';
import {AuthService} from '../../../services/auth.service';
import {Categories, Category} from '../../models/category';
import {CategoryServicesService} from '../../../services/category-services.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  public  categories: Category[] ;
  public  categoryObject: Category ;

  constructor(

    private route: ActivatedRoute,
    private categoryServicesService: CategoryServicesService,
    private router: Router
  ) {

    this.categoryServicesService.getCategories().subscribe(response => {

      this.categories = response._embedded.category;

    });
  }

  ngOnInit(): void {

  }

  selectCategory(category: Category): void {

    this.categoryObject = category;


  }



}
