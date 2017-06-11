import { Component } from '@angular/core';
import { AlertController } from 'ionic-angular';
import { SMS } from '@ionic-native/sms';

@Component({
  selector: 'page-i-ot',
  templateUrl: 'i-ot.html'
})
export class IOTPage {

  phone: string = '0946866793';

  constructor(
    public alertCtrl: AlertController,
    private sms: SMS) {
  }

  button1() {
    this.sms.send(this.phone, 'On1');
  }

  button2() {
    this.sms.send(this.phone, 'Off1');
  }

  button3() {
    this.sms.send(this.phone, 'On2');
  }

  button4() {
    this.sms.send(this.phone, 'Off2');
  }

  button5() {
    this.sms.send(this.phone, 'Onall');
  }

  button6() {
    this.sms.send(this.phone, 'Offall');
  }

  button7() {
    this.sms.send(this.phone, 'Open');
  }

  changePhone() {
    let prompt = this.alertCtrl.create({
      title: 'Số điện thoại',
      message: "Đổi số điện thoại",
      inputs: [
        {
          name: 'phone',
          placeholder: 'Số điện thoại'
        },
      ],
      buttons: [
        {
          text: 'Cancel',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Save',
          handler: data => {
            this.phone= data.phone.replace(' ', '').trim();
          }
        }
      ]
    });
    prompt.present();
  }
}
