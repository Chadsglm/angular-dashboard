import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShopComponent } from './shop.component';
import { ShopRoutingModule } from './shop.routing';

import { HeadroomModule } from '@ctrl/ngx-headroom';
import { ShopsContainersModule } from '../../containers/shops/shops.containers.module';
import { PaginationModule } from 'ngx-bootstrap/pagination';
import { FormsModule as FormsModuleAngular, ReactiveFormsModule } from '@angular/forms';
import { ComponentsCarouselModule } from 'src/app/components/carousel/components.carousel.module';

@NgModule({
  declarations: [ShopComponent],
  imports: [
    CommonModule,
    ShopRoutingModule,
    ShopsContainersModule,
    HeadroomModule,
    FormsModuleAngular,
    ReactiveFormsModule,
    ComponentsCarouselModule,
    PaginationModule.forRoot(),
  ]
})
export class ShopModule { }
