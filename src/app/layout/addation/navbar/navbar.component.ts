import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AuthService } from '../../../shared/services/auth.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
isLogin:boolean = false;

constructor(private _AuthService:AuthService){}

ngOnInit():void{
this._AuthService.userData.subscribe(()=>{
  if(this._AuthService.userData.getValue()==null){
    this.isLogin = false
  }else{
    this.isLogin = true;
  }
}
 
)
}

}
