import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { AuthService } from '../../../shared/services/auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
})
export class RegisterComponent {
  ErrorMsg:string = ""
  isLoading:boolean = false ; 
  constructor(private _AuthService : AuthService , private _Router:Router) { }

  registerform: FormGroup = new FormGroup(
    {
      name: new FormControl(null, [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(10),
      ]),
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [
        Validators.required,
        Validators.pattern(/^[A-Z][0-9]{6}/),
      ]),
      rePassword: new FormControl(null, [
        Validators.required,
        Validators.pattern(/^[A-Z][0-9]{6}/),
      ]),
      phone: new FormControl(null, [
        Validators.required,
        Validators.pattern(/^(010|011|012)[0-9]{8}$/),
      ]),
    },
    this.confirmRepassword
  );


  registerSubmit() {
    this.isLoading=true
    this._AuthService.sendRegister(this.registerform.value).subscribe({
      next: (res) => {
        console.log(res);
        this.isLoading=false;
        this._Router.navigate(['login'])
      },
      error: (err) => {
        this.ErrorMsg=err.error.message
        this.isLoading=false;
      },
    });
  }

  confirmRepassword(g: any) {
    if (g.get('password')?.value === g.get('rePassword')?.value) {
      return null;
    } else {
      return { passMatched: true };
    }
  }
}
