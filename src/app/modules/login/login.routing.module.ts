import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
 
const routes: Routes = [
  {   path: 'login',   component: LayoutComponent,
  },
];
 

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})


export class LoginRoutingModule { }
