import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AdmListPage } from './adm-list';

@NgModule({
  declarations: [
    AdmListPage,
  ],
  imports: [
    IonicPageModule.forChild(AdmListPage),
  ],
})
export class AdmListPageModule {}
