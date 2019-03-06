import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the CorpoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage({
  name:'corpo'
})
@Component({
  selector: 'page-corpo',
  templateUrl: 'corpo.html',
})
export class CorpoPage {

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams
    ) {
  }

  enviar(){
    this.navCtrl.setRoot('antibiotico');
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad CorpoPage');
  }

}
