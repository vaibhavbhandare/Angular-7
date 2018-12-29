import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HttpClientModule} from '@angular/common/http'
import { ObservableComponent } from './observable/observable.component';
import {FormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import { ObService } from './ObService/ob.service';
import { HomeComponent } from './home/home.component';
import { TdfComponent } from './TDF/tdf.component';
import { MDFComponent } from './mdf/mdf.component';
import { DetailComponent } from './Details/detail.component';
const routes: Routes = [
  {path:"obser",component:ObservableComponent},
  {path:"home", component:HomeComponent},
  {path:"mdf" , component:MDFComponent},
 {path:"tdf" , component:TdfComponent},
 {path:"detail/:xyz", component:DetailComponent},  // /:xyz
 {path:"observable" , component:ObservableComponent}
];

@NgModule({
  declarations:[
    ObservableComponent,
    HomeComponent,
    MDFComponent,
      TdfComponent,
      DetailComponent
  ],
  providers:[ ObService],
  imports: [RouterModule.forRoot(routes),FormsModule,CommonModule,HttpClientModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
