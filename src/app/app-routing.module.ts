import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './Mainpages/home/home.component';
import { AboutUsComponent } from './Mainpages/about-us/about-us.component';
import { PromotionComponent } from './Mainpages/promotions/promotions.component';
import { SignupComponent } from './Mainpages/auth/signup.component';
import { AuthenticationComponent } from "./Mainpages/auth/authentication.component";

const routes : Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'aboutus', component: AboutUsComponent},
  { path: 'promotions', component: PromotionComponent},
  { path: 'auth', component: AuthenticationComponent, loadChildren: './Mainpages/auth/auth.module#AuthModule'}
];

export const routing = RouterModule.forRoot(routes);
