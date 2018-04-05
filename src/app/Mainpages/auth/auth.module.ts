import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { RecaptchaModule } from 'ng-recaptcha';

import { SigninComponent } from './signin.component';
import { SignupComponent } from './signup.component';
import { LogoutComponent } from './logout.component';
import { authRouting } from './auth.routes';

@NgModule({
   declarations: [
     SigninComponent,
     SignupComponent,
     LogoutComponent
   ],
   imports: [
     CommonModule,
     ReactiveFormsModule,
     RecaptchaModule.forRoot(),
     authRouting
   ]
})

export class AuthModule{

}
