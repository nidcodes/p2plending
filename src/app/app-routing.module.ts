import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { UserComponent } from './user/user.component';
import { AuthGuardService } from './core/auth-guard.service'
import { UserResolver } from './user/user.resolver';



const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent, canActivate: [AuthGuardService] },
  { path: 'register', component: RegisterComponent, canActivate: [AuthGuardService] },
  { path: 'user', component: UserComponent, resolve: { data: UserResolver } }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
