import { Component, ViewChild } from '@angular/core';
import { Nav, Platform, AlertController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { DatabaseProvider } from '../providers/database/database';
import { LoginPage } from '../pages/login/login';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {

  @ViewChild(Nav) nav: Nav;

  rootPage:any = LoginPage;

  pages: Array<{title: string, component: any}>;

  public constructor(public platform: Platform, 
    statusBar: StatusBar, 
    splashScreen: SplashScreen,
    public dbProvider : DatabaseProvider,
    private alertCtrl: AlertController,) {
    dbProvider.createDatabase()
    .then(() => {

    })
    .catch(() => {

    })
    
    platform.ready().then(() => {
      statusBar.styleDefault();
      splashScreen.hide();
    });

    this.pages = [
      {title: 'Categoria', component: 'CategoriaPage'},
      {title: 'Produto', component: 'ProdutoPage'}
    ];

  }

  openPage(page){
    if(page.title == "Produto")
    {
      this.nav.setRoot(page.component);
    }
    if(page.title == "Categoria")
    {
      this.nav.setRoot(page.component);
    }
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
          role: 'Sair',
          handler: () => {
            this.platform.exitApp()
          }
        },
      ]
    });
    alert.present();
  }

}

