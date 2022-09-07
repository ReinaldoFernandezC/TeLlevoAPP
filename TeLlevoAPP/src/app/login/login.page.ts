import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder,
  EmailValidator
} from '@angular/forms';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  formulariologin: FormGroup;


  constructor(public fb: FormBuilder,
    public navControl:NavController) { 

    this.formulariologin = this.fb.group({
      'nombre': new FormControl("",Validators.required),
      'password': new FormControl("",Validators.required)
    });

  }
  
  ngOnInit() {
  }
  async ingresar(){
    if(EmailValidator){
      this.navControl.navigateRoot('home')
    }
  }

}
