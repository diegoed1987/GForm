import { Component, OnInit } from '@angular/core';
import { FormService } from './../services/form-service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-form',
  templateUrl: './form.page.html',
  styleUrls: ['./form.page.scss'],
})
export class FormPage implements OnInit {

  ngOnInit(){

  }

  resLista: any;
  items: any[] = [];

  constructor(   
    public alertController: AlertController, 
    public formService: FormService
  ) {}
  
  async presentAlertPrompt() {
    const alert = await this.alertController.create({
      header: 'Nueva Forma',
      subHeader: 'Nombre de la Forma',
      inputs: [
        {
          name: 'name',
          type: 'text',
          placeholder: ''          
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'primary',
          handler: () => {
            console.log('Confirm Cancel');
          }
        }, {
          text: 'Ok',
          handler: () => {
            console.log('Confirm Ok');
          }
        }
      ]
    });

    await alert.present();
    let result = await alert.onDidDismiss();
    let name = result.data.values.name;
    this.formService.createForm(name);
  }

  listarFormas(){
    this.resLista = this.formService.findForm();
    //console.log(this.resLista);
    return this.resLista;
  }
  
  doRefresh(event) {
    setTimeout(() => {
      this.items = this.listarFormas(); 
      console.log(this.items);
      event.target.complete();
    }, 1500);
  }

}
