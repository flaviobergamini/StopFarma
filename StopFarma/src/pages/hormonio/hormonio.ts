import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the HormonioPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage({
  name:'hormonio'
})
@Component({
  selector: 'page-hormonio',
  templateUrl: 'hormonio.html',
})
export class HormonioPage {

  constructor(
     public navCtrl: NavController,
     public navParams: NavParams
     ) {
  }

  enviar(){
    this.navCtrl.setRoot('corpo');
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad HormonioPage');
  }

}
