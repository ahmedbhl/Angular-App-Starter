import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared-module.module';
import { LazyRoutingRoutingModule } from './lazy-routing.module';
import { LazyComponent } from './lazy.component';

@NgModule({
  declarations: [LazyComponent],
  imports: [
    SharedModule,
    LazyRoutingRoutingModule,
  ],
  providers: []
})
export class LazyModule { }
