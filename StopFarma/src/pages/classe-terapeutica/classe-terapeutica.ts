import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ClasseTerapeuticaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage({
  name:'Classe'
})
@Component({
  selector: 'page-classe-terapeutica',
  templateUrl: 'classe-terapeutica.html',
})
export class ClasseTerapeuticaPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ClasseTerapeuticaPage');
  }

}
