import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoryServicesService {




  private baseUrl = `${environment.baseUrl}/api/v1/categories`;

  constructor(private http: HttpClient) { }

  getCategory(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  createCategory(employee: any): Observable<any> {
    return this.http.post(`${this.baseUrl}`, employee);
  }

  updateCategory(id: number, value: any): Observable<any> {
    return this.http.put(`${this.baseUrl}/${id}`, value);
  }

  deleteCategory(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
  }

  getCategories(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }

}
