import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './componets/login/login.component';
import {LayoutComponent} from './componets/layout/layout.component';
import {AuthGuard} from './shared/guards/auth.guard';


const routes: Routes = [

  { path: '', component: LoginComponent },
  {
    path: 'dashboard', component: LayoutComponent,
    canActivate: [AuthGuard]

  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
