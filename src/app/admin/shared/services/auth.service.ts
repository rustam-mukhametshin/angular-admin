import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {FirebaseAuthResponse, User} from '../../../shared/interfaces';

@Injectable()
export class AuthService {
  constructor(private http: HttpClient) {
  }

  private setToken(response: FirebaseAuthResponse | null) {
    if (response) {
      const expiresDate = new Date(new Date().getTime() + +response.expiresIn * 1000);
      localStorage.setItem('firebase-token', response.idToken);
      localStorage.setItem('firebase-token-expired', expiresDate.toString());
    } else {
      localStorage.clear();
    }
  }
}
