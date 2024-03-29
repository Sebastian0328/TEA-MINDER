import { testGuard } from './test.guard';
import { Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { TeaListComponent } from './pages/tea-list/tea-list.component';
import { TeaDetailComponent } from './pages/tea-detail/tea-detail.component';

export const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'tea-list', component: TeaListComponent, canActivate:[testGuard]},
  {path: 'tea-detail/:id', component: TeaDetailComponent, canActivate:[testGuard]},
  {path:"", redirectTo:"/LoginComponent" , pathMatch:"full"}
];
