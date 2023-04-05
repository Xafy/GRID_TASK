import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  private url = 'http://jsonplaceholder.typicode.com/posts';
    
  constructor(private httpClient: HttpClient) { }

  getPosts(): Observable<any>{
    return this.httpClient.get(this.url)
    .pipe(
      map((response: any) => {
        console.log(response);
        return response;
      }))
  }

}