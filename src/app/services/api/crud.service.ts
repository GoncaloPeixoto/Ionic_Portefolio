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

export interface Pex {
  Pex:[
  id: number,
  title: string,
  description: string,
  isWanted: boolean,];
}

export interface PS {
  PS:[
  id: number,
  title: string,
  description: string,
  isWanted: boolean,];
}

export interface Oskills {
  Oskills:[
  id: number,
  title: string,
  description: string,
  isWanted: boolean,];
}

export interface RA {
  RA:[
  id: number,
  title: string,
  description: string,
  isWanted: boolean,];
}

export interface Projects {
  Projects:[
  id: number,
  title: string,
  description: string,
  isWanted: boolean,];
}

export interface FP {
  FP:[
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

  getPex(controller : string): Observable<Pex> {
    return this.http.get<Pex>(`${this.url}/api/${controller}`);
  }
  
  getPS(controller : string): Observable<PS> {
    return this.http.get<PS>(`${this.url}/api/${controller}`);
  }

  getOskills(controller : string): Observable<Oskills> {
    return this.http.get<Oskills>(`${this.url}/api/${controller}`);
  }

  getRA(controller : string): Observable<RA> {
    return this.http.get<RA>(`${this.url}/api/${controller}`);
  }

  getProjects(controller : string): Observable<Projects> {
    return this.http.get<Projects>(`${this.url}/api/${controller}`);
    }

  getFutureProjects(controller : string): Observable<FP> {
  return this.http.get<FP>(`${this.url}/api/${controller}`);
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