import { Component } from '@angular/core';
import { AuthService } from './services/auth.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
   usuario ={
    email: '', 
    password:''
   } 
   constructor (private authServices: AuthService){
    
   }
   Ingresar(){
    console.log(this.usuario); 
    const {email , password} = this.usuario; 
    this.authServices.login(email , password).then(res =>{
      console.log("Se registro", res); 
    })
   }
   IngresarConGoogle(){
    console.log(this.usuario); 
    const {email , password} = this.usuario; 
    this.authServices.loginWithGoogle(email , password).then(res =>{
      console.log("Se registro", res); 
    })
   }
   logout(){
    this.authServices.logout(); 
   }
   
}
