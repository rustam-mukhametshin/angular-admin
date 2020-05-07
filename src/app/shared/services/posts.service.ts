import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {FirebaseCreateResponse, Post} from '../../admin/shared/interfaces';
import {environment} from '../../../environments/environment';
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
}
