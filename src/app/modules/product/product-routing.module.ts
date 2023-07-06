import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductdetailComponent } from './productdetail/productdetail.component';
import { NewproductComponent } from './newproduct/newproduct.component';

const routes: Routes = [

{path:'', component:ProductdetailComponent},
{path:'newproduct',component:NewproductComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductRoutingModule { }
