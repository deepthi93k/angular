import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes,RouterModule} from "@angular/router";
import { ProductListComponent } from '../components/product-list/product-list.component';
import { AddproductComponent } from '../component/addproduct/addproduct.component';

const routes:Routes =[
  {path:"",component:ProductListComponent},
  {path:"addproduct",component:AddproductComponent}
]

@NgModule({
  imports: [
   RouterModule.forRoot(routes)
  ],
  exports:[
    RouterModule
  ],
  declarations: []
})
export class ApproutingModule { }
