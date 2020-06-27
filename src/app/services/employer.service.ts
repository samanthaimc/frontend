import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {Observable} from "rxjs";
import {Employer} from "../model/Employer";


@Injectable({
  providedIn: 'root'
})
export class EmployerService {

  url = environment.url + 'employer';

  constructor(private http: HttpClient) {
  }


  save(e): Observable<boolean> {
    return this.http.post<boolean>(this.url, e);
  }

  getAll() {
    return this.http.get<Employer[]>(this.url);
  }

  search(id) {
    return this.http.get<Employer>(this.url + `/${id}`);
  }

  delete(id) {
    return this.http.delete<boolean>(this.url+`/${id}`);

  }
}
