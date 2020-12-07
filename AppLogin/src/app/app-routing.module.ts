import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './ext/home-page/home-page.component';

const routes: Routes = [
  {path:'', component:HomePageComponent},
  {path:"login", loadChildren: ()=> import('./ext/external.module').then(t=>t.ExternalModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
