import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JoinerDasboardComponent } from './joiner-dasboard/joiner-dasboard.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { TrainerDashboardComponent } from './trainer-dashboard/trainer-dashboard.component';

const routes: Routes = [
  {path:'', redirectTo:'login', pathMatch:'full'},
  {path:'signup', component:SignupComponent},
  {path:'login', component:LoginComponent},
  {path:'joiner', component:JoinerDasboardComponent},
  {path:'trainer', component:TrainerDashboardComponent},
  {path:'**', redirectTo:'login', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
