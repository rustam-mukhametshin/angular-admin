import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {AuthService} from '../../services/auth.service';

@Component({
  selector: 'app-admin-layout',
  templateUrl: './admin-layout.component.html',
  styleUrls: ['./admin-layout.component.scss']
})
export class AdminLayoutComponent implements OnInit {

  constructor(
    private router: Router,
    private authService: AuthService
  ) {
  }

  ngOnInit() {
  }

  logout(event: MouseEvent) {
    event.preventDefault();
    this.authService.logout();
    this.router.navigate(['/admin', 'login']);
  }
}
