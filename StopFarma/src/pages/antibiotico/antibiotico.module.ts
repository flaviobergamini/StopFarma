import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AntibioticoPage } from './antibiotico';

@NgModule({
  declarations: [
    AntibioticoPage,
  ],
  imports: [
    IonicPageModule.forChild(AntibioticoPage),
  ],
})
export class AntibioticoPageModule {}
