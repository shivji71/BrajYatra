import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor(private http: HttpClient) { }

  public getData(url){
    return this.http.get(url,{observe: 'response'}).pipe(map(response => response.body), catchError(error => this.handleError(error)))
  }

  public handleError(error){
    return error;
  }
}
