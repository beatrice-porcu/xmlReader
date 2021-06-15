import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-xml-process-page',
  templateUrl: './xml-process-page.component.html',
  styleUrls: ['./xml-process-page.component.css']
})
export class XmlProcessPageComponent implements OnInit {
  showDataTable = false;
  constructor() { }

  ngOnInit() {
  }

  setResultsTable(existingObject: boolean) {
    this.showDataTable = existingObject;
    console.log(this.showDataTable);
  }

}
