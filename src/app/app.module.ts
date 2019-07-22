import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { UserComponent } from './user/user.component';

import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { environment } from '../environments/environment';
import { UserService } from './core/user.service';
import { AuthService } from './core/auth.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InvestorComponent } from './investor/investor.component';
import { BorrowComponent } from './borrow/borrow.component';
import { InvestComponent } from './invest/invest.component';
import { UserResolver } from './user/user.resolver';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    UserComponent,
    InvestorComponent,
    BorrowComponent,
    InvestComponent
  ],
  imports: [
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireAuthModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [UserService, AuthService, UserResolver],
  bootstrap: [AppComponent]
})
export class AppModule { }
