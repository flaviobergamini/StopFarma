import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the DoencaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage({
  name:'doenca'
})
@Component({
  selector: 'page-doenca',
  templateUrl: 'doenca.html',
})
export class DoencaPage {

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams
    ) {
  }
  enviar(){
    this.navCtrl.setRoot('fitoterapico');
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad DoencaPage');
  }

}
