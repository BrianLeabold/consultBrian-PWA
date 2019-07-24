import { NgtUniversalModule } from '@ng-toolkit/universal';
import { CommonModule, AsyncPipe } from '@angular/common';
import { TransferHttpCacheModule } from '@nguniversal/common';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AngularFireModule } from '@angular/fire';

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from 'src/environments/environment';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NotificationComponent } from './notification/notification.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { MyservicesComponent } from './myservices/myservices.component';
import { NavComponent } from './nav/nav.component';
import { NewsComponent } from './news/news.component';
import { PrivacyComponent } from './privacy/privacy.component';
import { AuthService } from './auth.service';
import { AuthGuard } from './auth.guard';
import { TokenInterceptorService } from './token-interceptor.service';
import { MyresourcesComponent } from './myresources/myresources.component';
import { CookiesComponent } from './cookies/cookies.component';
import { FooterComponent } from './footer/footer.component';
import { CompostingTolietComponent } from './news/composting-toliet/composting-toliet.component';
import { GrannyFlatsComponent } from './news/granny-flats/granny-flats.component';
import { SolarShowerComponent } from './news/solar-shower/solar-shower.component';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireMessagingModule } from '@angular/fire/messaging';
import { MessagingService } from './firebasenotifications.service';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BootstrapModule } from './bootstrap/bootstrap.module';



@NgModule({
  declarations: [
    AppComponent,
    ContactComponent,
    HomeComponent,
    MyservicesComponent,
    NavComponent,
    NewsComponent,
    PrivacyComponent,
    MyresourcesComponent,
    CookiesComponent,
    FooterComponent,
    CompostingTolietComponent,
    GrannyFlatsComponent,
    SolarShowerComponent,
    NotificationComponent
  ],
  imports: [
 CommonModule,
 BootstrapModule,
  NgbModule,
 ServiceWorkerModule.register('/ngsw-worker.js', { enabled: environment.production }),
 AngularFireDatabaseModule,
 AngularFireAuthModule,
 AngularFireMessagingModule,
 AngularFireModule.initializeApp(environment.firebase),
 NgtUniversalModule,
 TransferHttpCacheModule,
 HttpClientModule,
 FormsModule,
 HttpClientModule,
 AppRoutingModule
  ],
  providers: [MessagingService, AsyncPipe, AuthService, AuthGuard, {
    provide: HTTP_INTERCEPTORS, useClass: TokenInterceptorService, multi: true
  }],
})
export class AppModule { }
