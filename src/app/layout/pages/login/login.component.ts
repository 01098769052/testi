import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../../../shared/services/auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  ErrMsg:string="";
  isLoading:boolean = false
  loginform: FormGroup = new FormGroup({
  email:new FormControl(null , [Validators.required,Validators.email]),
  password:new FormControl(null , [Validators.required,Validators.pattern(/^[A-Z][0-9]{6}/)])
})

constructor(private _AuthService:AuthService , private _Router:Router){}
loginSubmit(){
this.isLoading = true
  this._AuthService.sendLogin(this.loginform.value).subscribe({
    next:(res)=>{
      this.isLoading=false
      // to share User Data
      localStorage.setItem("userToken" , res.token)
      // to decode Token
      this._AuthService.userInform()
      this._Router.navigate(['home'])   
    },error:(err)=>{
      this.isLoading=false
      this.ErrMsg=err.error.message
    }
  })  
}

}
