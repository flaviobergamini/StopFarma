import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HormonioPage } from './hormonio';

@NgModule({
  declarations: [
    HormonioPage,
  ],
  imports: [
    IonicPageModule.forChild(HormonioPage),
  ],
})
export class HormonioPageModule {}
