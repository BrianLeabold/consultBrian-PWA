import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NewsComponent } from './news/news.component';
import { GrannyFlatsComponent } from './news/granny-flats/granny-flats.component';
import { SolarShowerComponent } from './news/solar-shower/solar-shower.component';
import { CompostingTolietComponent} from './news/composting-toliet/composting-toliet.component';
import { MyservicesComponent } from './myservices/myservices.component';
import { PhotosComponent } from './photos/photos/photos.component';
import { PrivacyComponent } from './privacy/privacy.component';
import { ContactComponent} from './contact/contact.component';
import { AuthGuard } from './auth.guard';


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'whats-new', component: NewsComponent},
  {path: 'whats-new/solar-shower', component: SolarShowerComponent},
  {path: 'whats-new/composting-toilet', component: CompostingTolietComponent},
  {path: 'whats-new/granny-flats', component: GrannyFlatsComponent},
  {path: 'services', component: MyservicesComponent},
  {path: 'photos', component: PhotosComponent},
  {path: 'privacy', component: PrivacyComponent},
  {path: 'contact', component: ContactComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
