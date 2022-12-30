import { HttpClient } from '@angular/common/http';
import { environment } from './../../../environments/environment';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface Skill {
  skill:[
  id: number,
  title: string,
  description: string,
  isWanted: boolean,];
}

export interface RootObject {
  
}

@Injectable({
  providedIn: 'root'
})
export class CrudService {
  url : string = environment.api_url;
  constructor(private http: HttpClient) { }

  getSkills(controller : string): Observable<Skill> {
  return this.http.get<Skill>(`${this.url}/api/${controller}`);
  }
  
  // getById(controller : string, id : string) {
  // return this.http.get(`${this.url}/api/${controller}/${id}`);
  // }
  // create(controller : string, model : any) {
  // return this.http.post(`${this.url}/api/${controller}/create`, model);
  // }
  // update(controller : string, model : any) {
  // return this.http.post(`${this.url}/api/${controller}/update`, model);
  // }
  // delete(controller : string, id : string) {
  // return this.http.post(`${this.url}/api/${controller}/delete`, {id : id});
  // }
}