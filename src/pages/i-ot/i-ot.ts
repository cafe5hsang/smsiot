import { Component } from '@angular/core';
import { AlertController, ToastController } from 'ionic-angular';
import { SMS } from '@ionic-native/sms';

@Component({
  selector: 'page-i-ot',
  templateUrl: 'i-ot.html'
})
export class IOTPage {

  phone: string = '0982969872';

  smsOptions = {
    replaceLineBreaks: false, // true to replace \n by a new line, false by default
    android: {
          intent: 'INTENT'  // Opens Default sms app
        //intent: '' // Sends sms without opening default sms app
      }
  }

  constructor(
    public alertCtrl: AlertController,
    public toastCtrl: ToastController, 
    private sms: SMS) {
  }

  button1() {
    this.sms.send(this.phone, 'On1')
      .then(function(res){ this.myToast(); }).catch(function(err){});
  }

  button2() {
    this.sms.send(this.phone, 'Off1')
      .then(function(res){ this.myToast(); }).catch(function(err){});
  }

  button3() {
    this.sms.send(this.phone, 'On2')
      .then(function(res){ this.myToast(); }).catch(function(err){});
  }

  button4() {
    this.sms.send(this.phone, 'Off2')
      .then(function(res){ this.myToast(); }).catch(function(err){});
  }

  button5() {
    this.sms.send(this.phone, 'Onall')
      .then(function(res){ this.myToast(); }).catch(function(err){});
  }

  button6() {
    this.sms.send(this.phone, 'Offall')
      .then(function(res){ this.myToast(); }).catch(function(err){});
  }

  button7() {
    this.sms.send(this.phone, 'Open')
      .then(function(res){ this.myToast(); }).catch(function(err){});
  }

  myToast() {
    let toast = this.toastCtrl.create({
      message: 'Success',
      duration: 2000
    });
    toast.present();
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
