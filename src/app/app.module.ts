import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';

import { MyApp } from './app.component';
import { LoginPage } from '../pages/login/login';


import { AuthService } from '../providers/auth/auth-service';

const firebaseConfig = {
  apiKey: "AIzaSyCmBggPu1OnPJk5eiXv8ntTQ-ZsKbBZg_w",
  authDomain: "blitz-bd709.firebaseapp.com",
  databaseURL: "https://blitz-bd709.firebaseio.com",
  projectId: "blitz-bd709",
  storageBucket: "blitz-bd709.appspot.com",
  messagingSenderId: "258828244174"
};

@NgModule({
  declarations: [
    MyApp,
    LoginPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireAuthModule

  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    LoginPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthService,
  ]
})
export class AppModule {}
