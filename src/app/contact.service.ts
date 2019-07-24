import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

const contactDbUrl = 'https://api.mlab.com/api/1/databases/contactdb/collections/contacts?apiKey=TrTwF54YIkRhrobnUiTk6BLIbWi_koW3';
@Injectable({
  providedIn: 'root'
})
export class ContactService {

  readonly contactUrl = contactDbUrl;
  constructor(private http: HttpClient, private router: Router) { }

  contactUser(user) {
    return this.http.post<any>(this.contactUrl, user)
    .pipe(catchError(this.errorHandler));
  }

  errorHandler(error: HttpErrorResponse) {
    return throwError(error);
  }
}
