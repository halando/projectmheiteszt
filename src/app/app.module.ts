import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { NavbarComponent } from './sharepage/navbar/navbar.component';
import { FooterComponent } from './sharepage/footer/footer.component';
import { KezdolapComponent } from './pages/kezdolap/kezdolap.component';
import { JegyComponent } from './pages/jegy/jegy.component';
import { KapcsolatComponent } from './pages/kapcsolat/kapcsolat.component';
import { KornyezetvedelemComponent } from './pages/kornyezetvedelem/kornyezetvedelem.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { UserListComponent } from './pages/user-list/user-list.component';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    KezdolapComponent,
    JegyComponent,
    KapcsolatComponent,
    KornyezetvedelemComponent,
    LoginComponent,
    RegisterComponent,
    ProfileComponent,
    UserListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
