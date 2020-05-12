import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {FirebaseCreateResponse, Post} from '../interfaces';
import {environment} from '../../../../environments/environment';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor(
    private httpClient: HttpClient
  ) {
  }

  create(post: Post): Observable<Post> {
    return this.httpClient.post(`${environment.firebaseDbUrl}/posts.json`, post)
      .pipe(map((response: FirebaseCreateResponse) => {
        return {
          ...post,
          id: response.name,
          data: new Date(post.date)
        };
      }))
      ;
  }

  getAll(): Observable<Post[]> {
    return this.httpClient.get(`${environment.firebaseDbUrl}/posts.json`)
      .pipe(map((response: { [key: string]: any }) => {
        return Object.keys(response)
          .map(key => ({
            ...response[key],
            id: key,
            date: new Date(response[key].date)
          }));
      }));
  }

  getById(id: string): Observable<Post> {
    return this.httpClient.get<Post>(`${environment.firebaseDbUrl}/posts/${id}.json`)
      .pipe(map((post: Post) => {
        return {
          ...post,
          id,
          data: new Date(post.date)
        };
      }))
      ;
  }

  remove(id: string): Observable<void> {
    return this.httpClient.delete<void>(`${environment.firebaseDbUrl}/posts/${id}.json`);
  }

  update(post: Post): Observable<Post> {
    return this.httpClient.patch<Post>(`${environment.firebaseDbUrl}/posts/${post.id}.json`, post);
  }
}
