import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SwPush } from '@angular/service-worker';
@Injectable({
  providedIn: 'root',
})
export class WebNotificationService {
  readonly VAPID_PUBLIC_KEY = 'BBplTGMxsjJxBmvuEmo13fb9UL8QstbritKsoWuv691rU5ZoDUD3NwmAGgFv7cV3aCnfTmBUJw6mH5MRNNrZNu0';
  private baseUrl = 'http://localhost:5000/notifications';
  constructor(private http: HttpClient,
              private swPush: SwPush) {}
  subscribeToNotification() {
    this.swPush.requestSubscription({
        serverPublicKey: this.VAPID_PUBLIC_KEY
    })
    .then(sub => this.sendToServer(sub))
    .catch(err => console.error('Could not subscribe to notifications', err));
  }
  sendToServer(params: any) {
    this.http.post(this.baseUrl, { notification : params }).subscribe();
  }
}
