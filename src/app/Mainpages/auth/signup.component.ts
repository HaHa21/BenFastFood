﻿import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { AuthService } from './auth.service';
import { User } from './user.model';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})

export class SignupComponent implements OnInit {
  userForm : FormGroup;

  constructor(private authService: AuthService) { }

  onSubmit(){
    const user = new User(
            this.userForm.value.email,
            this.userForm.value.password,
            this.userForm.value.firstName,
            this.userForm.value.lastName
       );
    this.authService.signup(user).subscribe(
       data => console.log(data),
       error => console.error(error)
    );

    this.userForm.reset();
  }

   ngOnInit() {
        this.userForm = new FormGroup({
            firstName: new FormControl(null, Validators.required),
            lastName: new FormControl(null, Validators.required),
            email: new FormControl(null, [
                Validators.required,
                Validators.pattern("[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?")
            ]),
            password: new FormControl(null, Validators.required)
        });
    }

}
