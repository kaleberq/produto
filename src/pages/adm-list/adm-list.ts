import { AuthService } from './../../providers/auth/auth-service';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { LoginPage } from '../login/login';


@IonicPage()
@Component({
  selector: 'page-adm-list',
  templateUrl: 'adm-list.html',
})
export class AdmListPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private authService: AuthService) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad AdmListPage');
  }

  signOut(){
    this.authService.signOut()
      .then(() => {
        this.navCtrl.setRoot(LoginPage);
        })
        .catch((error) => {
          console.error(error);
        });
  }
}
