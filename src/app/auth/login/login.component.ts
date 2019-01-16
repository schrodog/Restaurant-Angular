import { Component, OnInit } from '@angular/core';
import {Login} from '../../objects'
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private fb: FormBuilder,
    private authService: AuthService,
    private router: Router) {
      this.form = this.fb.group({
        email: ['', Validators.required],
        password: ['', Validators.required]
      })
    }

  ngOnInit() {
    this.authService.logout()
  }
  
  form: FormGroup

  login(){
    const val = this.form.value

    console.log(val);

    if (val.email && val.password){
      this.authService.login(val.email, val.password)
        .subscribe(
          () => {
            console.log('user logged in')
            this.router.navigateByUrl("/protected")
          },
          err => {
            if (err.status === 401){
              window.alert("incorrect pwd")
            } else {
              window.alert("unknown error")
            }
          }
        )
    }
  }


}
