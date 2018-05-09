import { Component } from '@angular/core';
import { NavController,AlertController } from 'ionic-angular';


@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {

  usuario:string = "";
  senha:string="";
    

  constructor(public navCtrl: NavController,
       public alertCtrl: AlertController) {
        this.usuario = "kalebe";
        this.senha = "123";

  }

login(pagina){
  if (this.usuario.trim() == "kalebe" && this.senha.trim() == "123")
  {
      this.irParaPagina(pagina);
  }
  if(this.usuario.trim() != "kalebe" || this.senha.trim() != "123")
  {
      this.presentAlert();        
  }
}

irParaPagina (pagina) {
  this.navCtrl.setRoot(pagina);
  }

presentAlert() {
  let alert = this.alertCtrl.create({
    title: 'Usuario ou senha incorreto',
    subTitle: 'Tente novamente',
    buttons: ['Sair']
  });
  alert.present();
}  
}