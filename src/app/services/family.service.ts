import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Family} from "../model/Family";

@Injectable({
  providedIn: 'root'
})
export class FamilyService {

  url = environment.url + 'family';

  constructor(private http: HttpClient) {
  }


  save(e): Observable<boolean> {
    return this.http.post<boolean>(this.url, e);
  }

  getAll() {
    return this.http.get<Family[]>(this.url);
  }

  search(id) {
    return this.http.get<Family>(this.url + `/${id}`);
  }

  delete(id) {
    return this.http.delete<boolean>(this.url+`/${id}`);

  }
}
