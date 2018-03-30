import { Routes } from "@angular/router";

import { SignupComponent } from "./signup.component";


export const AUTH_ROUTES: Routes = [
    { path: '', redirectTo: 'signup', pathMatch: 'full' },
    { path: 'signup', component: SignupComponent }
   
];