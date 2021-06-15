/* eslint-disable @typescript-eslint/member-ordering */
import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';
import * as parser from 'fast-xml-parser';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class XmlParserService {

  public jsonObject = null;
  private jsonDataSource = new BehaviorSubject(this.jsonObject);
  currentJsonObject = this.jsonDataSource.asObservable();

  options = {
    attributeNamePrefix: '',
    ignoreAttributes: false,
    parseNodeValue: true,
    parseAttributeValue: true,
    trimValues: true,
    arrayMode: false,
  };

  constructor(
    public toastController: ToastController
  ) { }

  parseXML(xmlData): boolean {
    try {
      const jsonObj = parser.parse(xmlData, this.options, true);
      this.jsonObject = jsonObj;
      this.jsonDataSource.next(this.jsonObject);
      console.log(this.jsonObject);
      console.log('FILE ANALIZZATO CORRETTAMENTE');
      return true;
    } catch (error) {
      console.log(error.message);
      this.presentToast(error.message);
      return false;
    }
  }

  async presentToast(message) {
    const toast = await this.toastController.create({
      message,
      duration: 2000
    });
    toast.present();
  }
}
