import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './Mainpages/home/home.component';
import { AboutUsComponent } from './Mainpages/about-us/about-us.component';
import { PromotionComponent } from './Mainpages/promotions/promotions.component';
import { SignupComponent } from './Mainpages/auth/signup.component';
import { AuthenticationComponent } from "./Mainpages/auth/authentication.component";
import { AUTH_ROUTES } from "./Mainpages/auth/auth.routes";

const routes : Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'aboutus', component: AboutUsComponent},
  { path: 'promotions', component: PromotionComponent},
  { path: 'auth', component: AuthenticationComponent, children: AUTH_ROUTES}
];

export const routing = RouterModule.forRoot(routes);
