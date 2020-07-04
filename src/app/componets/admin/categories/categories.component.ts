import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router, UrlSerializer} from '@angular/router';
import Swal from 'sweetalert2';
import {AuthService} from '../../../services/auth.service';
import {Categories, Category} from '../../models/category';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  public  categories: Categories ;
  public  categoryObject: Category ;

  constructor(

    private route: ActivatedRoute,
    private router: Router
  ) {



    this.categories =  {
      _embedded : {
        category : [ {
          createdAt : '2020-06-30T02:07:23.292',
          updatedAt : '2020-06-30T02:07:23.292',
          id : '5efa9e5b2b42224ca04e2bb7',
          name : 'Example 1',
          subCategory : null,
          currentAuditor : 'admin@admin.com',
          _links : {
            self : {
              href : 'https://obscure-lowlands-76090.herokuapp.com/api/v1/categories/5efa9e5b2b42224ca04e2bb7'
            },
            category : {
              href : 'https://obscure-lowlands-76090.herokuapp.com/api/v1/categories/5efa9e5b2b42224ca04e2bb7'
            }
          }
        }, {
          createdAt : '2020-07-01T01:13:13.732',
          updatedAt : '2020-07-01T01:13:13.732',
          id : '5efbe32991a6c57e44f80526',
          name : 'item2',
          subCategory : null,
          currentAuditor : 'admin@admin.com',
          _links : {
            self : {
              href : 'https://obscure-lowlands-76090.herokuapp.com/api/v1/categories/5efbe32991a6c57e44f80526'
            },
            category : {
              href : 'https://obscure-lowlands-76090.herokuapp.com/api/v1/categories/5efbe32991a6c57e44f80526'
            }
          }
        } ]
      },
      _links : {
        self : {
          href : 'https://obscure-lowlands-76090.herokuapp.com/api/v1/categories'
        },
        profile : {
          href : 'https://obscure-lowlands-76090.herokuapp.com/api/v1/profile/categories'
        }
      },
      page : {
        size : 20,
        totalElements : 2,
        totalPages : 1,
        number : 0
      }
    };

  }

  ngOnInit(): void {

  }

  selectCategory(category: Category): void {

    this.categoryObject = category;


  }



}
