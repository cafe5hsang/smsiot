import { Component } from '@angular/core';
import { AlertController } from 'ionic-angular';
import { SMS } from '@ionic-native/sms';

@Component({
  selector: 'page-i-ot',
  templateUrl: 'i-ot.html'
})
export class IOTPage {

  phone: string = '0946866793';

  smsOptions = {
    replaceLineBreaks: false, // true to replace \n by a new line, false by default
    android: {
          intent: 'INTENT'  // Opens Default sms app
        //intent: '' // Sends sms without opening default sms app
      }
  }

  constructor(
    public alertCtrl: AlertController,
    private sms: SMS) {
  }

  button1() {
    this.sms.send(this.phone, 'On1', this.smsOptions)
      .then(function(res){}).catch(function(err){});
  }

  button2() {
    this.sms.send(this.phone, 'Off1', this.smsOptions)
      .then(function(res){}).catch(function(err){});
  }

  button3() {
    this.sms.send(this.phone, 'On2', this.smsOptions)
      .then(function(res){}).catch(function(err){});
  }

  button4() {
    this.sms.send(this.phone, 'Off2', this.smsOptions)
      .then(function(res){}).catch(function(err){});
  }

  button5() {
    this.sms.send(this.phone, 'Onall', this.smsOptions)
      .then(function(res){}).catch(function(err){});
  }

  button6() {
    this.sms.send(this.phone, 'Offall', this.smsOptions)
      .then(function(res){}).catch(function(err){});
  }

  button7() {
    this.sms.send(this.phone, 'Open', this.smsOptions)
      .then(function(res){}).catch(function(err){});
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
