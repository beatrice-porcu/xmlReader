import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { XmlParserButtonComponent } from './xml-parser/xml-parser-button/xml-parser-button.component';
import { TableModule } from 'primeng/table';
import { XmlProcessPageComponent } from './xml-process-page/xml-process-page.component';
import { XmlResultsViewerComponent } from './xml-results-viewer/xml-results-viewer.component';


@NgModule({
  declarations: [
    XmlParserButtonComponent,
    XmlProcessPageComponent,
    XmlResultsViewerComponent
  ],
  exports: [
    XmlParserButtonComponent,
    XmlProcessPageComponent,
    XmlResultsViewerComponent
  ],
  imports: [
    CommonModule,
    TableModule
  ]
})
export class XmlParserModule { }
