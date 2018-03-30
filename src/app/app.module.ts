import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

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
import { SignupComponent } from './Mainpages/auth/signup.component';

@NgModule({
  declarations: [
    AppComponent,
    AppHeaderComponent,
    AppFooterComponent,
    AppBodyComponent,
    AboutUsComponent,
    HomeComponent,
    PromotionComponent, 
    HealthComponent,
    PostDirective, 
    PostBannerComponent,
    SignupComponent
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    routing
  ],
  entryComponents: [ 
      PromotionComponent, HealthComponent
  ], 
  providers: [
      PostService, AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
