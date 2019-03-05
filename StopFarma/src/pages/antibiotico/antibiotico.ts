import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';

/**
 * Generated class for the AntibioticoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage({
  name:'antibiotico'
})
@Component({
  selector: 'page-antibiotico',
  templateUrl: 'antibiotico.html',
})
export class AntibioticoPage {

  constructor(
     public navCtrl: NavController,
     public navParams: NavParams,
     public Alertctrl: AlertController
     ) {
  }

  enviar(){
    this.presentAlert('Envio', 'Realizado com sucesso!!!')
  }
  presentAlert(title: string, subtitle:string) {
    let alert = this.Alertctrl.create({
      title: title,
      subTitle: subtitle,
      buttons: ['OK']
    });
    alert.present();
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad AntibioticoPage');
  }
}
