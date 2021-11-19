import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShopComponent } from './shop.component';


const routes: Routes = [
  {
    path: '', component: ShopComponent,
    children: [
      { path: '', redirectTo: 'shop', pathMatch: 'full' },
      // { path: 'thumb-list', component: ThumbListComponent },
      // { path: 'image-list', component: ImageListComponent },
      // { path: 'details', component: DetailsComponent },
      // { path: 'details-alt', component: DetailsAltComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShopRoutingModule { }
