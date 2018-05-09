import { Component, ViewChild } from '@angular/core';
import { Nav, Platform, AlertController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { LoginPage } from '../pages/login/login';
import { AuthService } from '../providers/auth/auth-service';
import { User } from '../providers/auth/user';
import { Events } from 'ionic-angular';

@Component({
  templateUrl: 'app.html',
  
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;
  rootPage: any = LoginPage;
  user: User;
  email: String;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, 
    statusBar: StatusBar, 
    splashScreen: SplashScreen, private authService: AuthService, private alertCtrl: AlertController,
    public events: Events) {
    
    events.subscribe('user:created', (user) => {
      this.email = user.email;
    });  

    platform.ready().then(() => {
       statusBar.styleDefault();
       splashScreen.hide();
    });

    
this.pages = [
  { title: 'Veiculos', component: 'AdmListPage' },
];
}

presentConfirm() {
  let alert = this.alertCtrl.create({
    title: 'Saida',
    message: 'Realmente quer sair?',
    buttons: [
      {
        text: 'Cancel',
        role: 'cancel',
        handler: () => {
          console.log('Cancel clicked');
        }
      },
      {
        text: 'Sair',
        handler: () => {
          this.authService.signOut()
          .then(() => {
            this.nav.setRoot(LoginPage);
            })
            .catch((error) => {
              console.error(error);
            });
        }
      }
    ]
  });
  alert.present();
}

openPage(page){
if (page.title == "Fechar")
  {
    this.platform.exitApp();
  }
  else
  {
    this.nav.setRoot(page.component);
  }
}


}
