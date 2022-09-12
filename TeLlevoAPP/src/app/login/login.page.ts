import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router'; // envia informacion
import { ToastController } from '@ionic/angular'; // Ventanas emergentes


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  usuario = {
    email: '',
    password: '',
    nombre: ''
    
  }

  field: string = ""; //Validar campos vacios

  constructor(private router: Router, public toastController: ToastController) { }

  ngOnInit() {
  }

  

  // Ingresar
  ingresar() {
    // Le asigno un nombre temporal que será lo que esté antes del @ del correo
    var nombreTem = this.usuario.email.split("@");
    this.usuario.nombre = nombreTem[0];

    if (this.usuario.email == '' || this.usuario.password == '') {
      this.presentToast('Ingrese todos los datos')
      document.getElementById("mover").classList.add("animateheadShake");
    }else if (this.validateEmail(this.usuario.email) == false) {
      this.presentToast('Ingrese un correo valido')
      document.getElementById("mover").classList.add("animateheadShake");
    }else {
      let navigationExtras: NavigationExtras = {
        state: {
          usuario: this.usuario // asignar el objeto usuario a la variable usuario
        }
      };
      this.router.navigate(['/home'], navigationExtras);
    }
  }

  //  Recuperar contraseña
  Olvidar() {
    this.router.navigate(['/register']);
  }

  // Validar el correo tengo @ y .
  validateEmail(email: string) {
    var re = /\S+@\S+.\S+/;
    return re.test(email);
  }

  // Present Toast
  async presentToast(message: string, duration?: number) {
    const toast = await this.toastController.create({
      message: message,
      duration: duration ? duration : 2000
    });
    toast.present();
  }

}
