import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from '@angular/common';
import { PhotosComponent } from './photos/photos.component';
import { CeilingRepairComponent } from './ceiling-repair/ceiling-repair.component';
import { FlagstoneComponent } from './flagstone/flagstone.component';
import { GaragekensingtonComponent } from './garagekensington/garagekensington.component';
import { BootstrapModule } from '../bootstrap/bootstrap.module';
import { CptoiletComponent } from './cptoilet/cptoilet.component';
import { GaragedehesaComponent } from './garagedehesa/garagedehesa.component';
import { ExtpaintkensingtonComponent } from './extpaintkensington/extpaintkensington.component';
import { PhotoRoutingModule } from './photorouting.module';
import { SolarshowerComponent } from './solarshower/solarshower.component';

@NgModule({
  declarations: [PhotosComponent, CeilingRepairComponent, FlagstoneComponent,
    GaragekensingtonComponent, CptoiletComponent, GaragedehesaComponent, ExtpaintkensingtonComponent, SolarshowerComponent],
  imports: [
    CommonModule,
    PhotoRoutingModule,
    BootstrapModule,
    NgbModule
  ]
})
export class PhotosModule { }
