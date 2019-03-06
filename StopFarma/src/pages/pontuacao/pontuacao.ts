import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the PontuacaoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage({
  name:'pontuacao'
})
@Component({
  selector: 'page-pontuacao',
  templateUrl: 'pontuacao.html',
})
export class PontuacaoPage {

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams
    ) { 
  }

  menu(){
    this.navCtrl.setRoot('Classe');
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad PontuacaoPage');
  }

}
