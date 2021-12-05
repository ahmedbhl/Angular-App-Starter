import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { SharedModule } from 'src/app/shared/shared-module.module';

@NgModule({
  declarations: [HomeComponent],
  imports: [
    SharedModule,
    HomeRoutingRoutingModule,
  ]
})
export class HomeModule { }
