import { Component, ViewChild } from '@angular/core';
import { NavController, ToastController } from 'ionic-angular';
import { NgForm } from '@angular/forms';
import { User } from '../../providers/auth/user';
import { AuthService } from '../../providers/auth/auth-service';
import { Events } from 'ionic-angular';



@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  user: User = new User();
  @ViewChild('form') form: NgForm;

  constructor(
    public navCtrl: NavController,
    private toastCtrl: ToastController,
    private authService: AuthService,
    public events: Events) {
  }

  singIn(pagina) {
    if (this.form.form.valid){
      this.authService.singIn(this.user)
        .then(credentials => {
          this.events.publish('user:created', this.user);
          this.user.emailUser = credentials.email;
          this.navCtrl.setRoot(pagina);
          this.createUser(this.user);
        })
        .catch((error: any) => {
          let toast = this.toastCtrl.create({ duration: 3000, position: 'bottom'});
          if (error.code == "auth/invalid-email") {
            toast.setMessage('O e-mail digitado não é valido.');
          }else if (error.code == "auth/user-disabled") {
            toast.setMessage('O e-mail esta desativado.');
          }else if (error.code == "auth/user-not-found") {
            toast.setMessage('O e-mail não foi encontrado.');
          }else if (error.code == "auth/wrong-password") {
            toast.setMessage('A senha digitada não é valida.');
          }
          toast.present();
        });
    }
  }
  createUser(user) {
    this.events.publish('user:created', user);
  }
  
}

