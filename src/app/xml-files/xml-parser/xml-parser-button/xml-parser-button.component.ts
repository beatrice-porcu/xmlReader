import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { XmlParserService } from '../xml-parser.service';

@Component({
  selector: 'app-xml-parser-button',
  templateUrl: './xml-parser-button.component.html',
  styleUrls: ['./xml-parser-button.component.scss'],
})
export class XmlParserButtonComponent implements OnInit {
  @Output() showDataTable = new EventEmitter<boolean>(false);
  xmlFile;
  xmlFileName;
  fileContent;

  constructor(
    private parse: XmlParserService
  ) { }

  ngOnInit() {
    this.showDataTable.emit(false);
  }
  onFileChange(event) {
    this.xmlFile = event.target.files[0];
    console.log(this.xmlFile);
    this.xmlFileName = event.target.files[0].name;
  }

  // formatISOstringDate(dateString: string) {
  //   if (dateString.length > 0) {
  //     const time = dateString.substring(0, 8).split(':');
  //     const date = dateString.substring(8).split('-').reverse();
  //     return formatISO(new Date(+date[0], +date[1], +date[2], +time[0], +time[1], +time[2]));
  //   }
  // }

  onSubmit() {
    const reader = new FileReader();
    reader.readAsText(this.xmlFile);
    reader.onloadend = (e) => {
      this.fileContent = reader.result as string;
      this.showDataTable.emit(this.parse.parseXML(this.fileContent));
    };
    // const reader = new FileReader();
    // reader.readAsText(this.xmlFile);
    // reader.onloadend = (e) => {
    //   this.fileContent = reader.result as string;
    //   // rimuovi interruzioni di linea e spazi
    //   const str = this.fileContent.replace(/(?:\r\n|\r|\n)/g, ' ').replace(/\s/g, '');
    //   // split a !Bacsomatic
    //   const str2 = str.split('BacSomatic!');
    //   const strToObjects = str2.map(line => {
    //     const object = {
    //       Product: line.substring(
    //         line.indexOf('Product:') + 8,
    //         line.indexOf('--'))
    //         // reinserisci spazi parole prima delle maiuscole
    //         .replace(/([A-Z])/g, ' $1'),
    //       ID: line.substring(line.indexOf('ID:') + 3, line.indexOf('Time')),
    //       Time: this.formatISOstringDate(line.substring(line.indexOf('Time:') + 5, line.indexOf('!The', line.indexOf('Time:') + 5))),
    //       SCC: null,
    //       IBC: null,
    //       CFU: null
    //     };
    //     if (line.indexOf('SCC:') !== -1) {
    //       object.SCC = line.substring(line.indexOf('SCC:') + 4, line.indexOf('1000xCounts/ml', line.indexOf('SCC:') + 4));
    //     }
    //     if (line.indexOf('IBC:') !== -1) {
    //       object.IBC = line.substring(line.indexOf('IBC:') + 4, line.indexOf('1000xCounts/ml', line.indexOf('IBC:') + 4));
    //     }
    //     if (line.indexOf('CFU:') !== -1) {
    //       object.CFU = line.substring(line.indexOf('CFU:') + 4, line.indexOf('1000xCounts/ml', line.indexOf('CFU:') + 4));
    //     }
    //     return object;
    //   });
    //   // filtra eventuali oggetti vuoti per campi sempre presenti
    //   const filteredObjects = strToObjects.filter(obj => obj.ID.length !== 0 || obj.Product.length !== 0);
    //   this.dataSharingService.setBacSomaticData(filteredObjects);
    //   this.showDataTable = true;
    //   reader.onerror = () => {
    //     console.log(reader.error);
    //   };
    // };
  }

}
