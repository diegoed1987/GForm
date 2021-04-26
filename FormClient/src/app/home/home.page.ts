import { FormService } from './../services/form-service';
import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  resLista: any;
  items: any[] = [];

  constructor(   
  ) {}
}
