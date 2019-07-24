import { Component, OnInit} from '@angular/core';
import { SwUpdate, SwPush } from '@angular/service-worker';
import { MessagingService } from './firebasenotifications.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Consult Brian';
  update = false;
  message;

  constructor(updates: SwUpdate, private swPush: SwPush, private messagingService: MessagingService) {
    updates.available.subscribe(event => {

      this.update = true;
    });
    this.swPush.notificationClicks.subscribe( event => {
      console.log('Received notification: ', event);
      const url = event.notification.data.url;
      window.open(url, '_blank');
    });
  }

  ngOnInit() {

    const userId = 'user001';

    this.messagingService.requestPermission(userId);

    this.messagingService.receiveMessage();

    this.message = this.messagingService.currentMessage;

  }
}
