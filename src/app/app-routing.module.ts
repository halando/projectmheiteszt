import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { KezdolapComponent } from './pages/kezdolap/kezdolap.component';
import { JegyComponent } from './pages/jegy/jegy.component';
import { KornyezetvedelemComponent } from './pages/kornyezetvedelem/kornyezetvedelem.component';
import { KapcsolatComponent } from './pages/kapcsolat/kapcsolat.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { UserListComponent } from './pages/user-list/user-list.component';
import { sadminGuard } from './sadmin.guard';


const routes: Routes = [
  {path:'', component:LoginComponent},
  {path:'kezdolap', component:KezdolapComponent},
  {path:'jegy', component:JegyComponent},
  {path:'kornyezetvedelem', component:KornyezetvedelemComponent},
  {path:'kapcsolat', component:KapcsolatComponent},
  {path:'profile', component:ProfileComponent},
  {path:'user-list',component:UserListComponent,canActivate:[sadminGuard]},
  {path:'register', component:RegisterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
