import {Component, OnDestroy, OnInit} from '@angular/core';
import {PostsService} from '../shared/services/posts.service';
import {Post} from '../shared/interfaces';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-dashboard-page',
  templateUrl: './dashboard-page.component.html',
  styleUrls: ['./dashboard-page.component.scss']
})
export class DashboardPageComponent implements OnInit, OnDestroy {

  posts: Post[] = [];
  pSub: Subscription;
  searchString = '';

  constructor(
    private postsService: PostsService
  ) {
  }

  ngOnInit() {
    this.postsService.getAll().subscribe(posts => {
      this.posts = posts;
    });
  }

  ngOnDestroy(): void {
    if (this.pSub) {
      this.pSub.unsubscribe();
    }
  }

  remove(id: string) {

  }
}
