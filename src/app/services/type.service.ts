import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class TypeService {

  url = environment.url + 'type';

  constructor(private http: HttpClient) {
  }


  save(e): Observable<boolean> {
    return this.http.post<boolean>(this.url, e);
  }

  getAll() {
    return this.http.get<String[]>(this.url);
  }

  search(id) {
    return this.http.get<String>(this.url + `/${id}`);
  }

  delete(id) {
    return this.http.delete<boolean>(this.url+`/${id}`);

  }
}
