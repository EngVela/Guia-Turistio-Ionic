import { Component } from '@angular/core';
import { NavParams, NavController } from '@ionic/angular';
import { LubangoPage } from '../lubango/lubango.page';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(public navCtrl : NavController, public navParams : NavParams){
  }

  goToPage(){
    this.navCtrl.pop(LubangoPage)
}
}
