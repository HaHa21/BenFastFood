import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RecaptchaModule } from 'ng-recaptcha';

import { AppComponent } from './app.component';
import { AppHeaderComponent } from './Components/app-header/app-header.component';
import { AppFooterComponent } from './Components/app-footer/app-footer.component';
import { AppBodyComponent } from './Components/app-body/app-body.component';
import { AboutUsComponent } from './Mainpages/about-us/about-us.component';
import { routing } from './app-routing.module';
import { HomeComponent } from './Mainpages/home/home.component';
import { PromotionComponent } from './Mainpages/promotions/promotions.component';
import { PostBannerComponent } from './Mainpages/post/post-banner.component';
import { PostService } from './Mainpages/post/post.service';
import { AuthService } from './Mainpages/auth/auth.service';
import { HealthComponent } from './Mainpages/health/health.component';
import { PostDirective } from './Mainpages/post/post.directive';
import { LogoutComponent } from './Mainpages/auth/logout.component';
import { SignupComponent } from './Mainpages/auth/signup.component';
import { SigninComponent } from './Mainpages/auth/signin.component';
import { AuthenticationComponent } from './Mainpages/auth/authentication.component';
import { ErrorComponent } from './Components/errors/error.component';
import { ErrorService } from './Components/errors/error.service';

@NgModule({
  declarations: [
    AppComponent,
    AppHeaderComponent,
    AppFooterComponent,
    AppBodyComponent,
    AboutUsComponent,
    HomeComponent,
    AuthenticationComponent,
    PromotionComponent,
    HealthComponent,
    PostDirective,
    PostBannerComponent,
    LogoutComponent,
    SignupComponent,
    SigninComponent,
    ErrorComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    routing,
    ReactiveFormsModule,
    HttpModule,
    RecaptchaModule.forRoot()
  ],
  entryComponents: [
      PromotionComponent, HealthComponent
  ],
  providers: [
      PostService, AuthService, ErrorService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
