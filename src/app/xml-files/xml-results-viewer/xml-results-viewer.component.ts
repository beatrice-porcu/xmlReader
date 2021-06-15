/* eslint-disable @typescript-eslint/naming-convention */
import { Component, Input, OnChanges } from '@angular/core';
import { XmlParserService } from '../xml-parser/xml-parser.service';
import { XmlNutritionalData } from '../xmlNutritionalData';

@Component({
  selector: 'app-xml-results-viewer',
  templateUrl: './xml-results-viewer.component.html',
  styleUrls: ['./xml-results-viewer.component.css']
})


export class XmlResultsViewerComponent implements OnChanges {
  @Input() showData: boolean;
  xmlData: XmlNutritionalData;
  columns;

  constructor(
    private parserService: XmlParserService
  ) { }

  ngOnChanges(): void {
    if (this.showData === true) {
      this.parserService.currentJsonObject.subscribe(res => {
        console.log(res);
        let nutrientKeys = [];
        const data = res.labAnalysis;
        // array chiavi elementi per indexOf
        data.labResult.nutrientCompositions.nutrient.forEach(el => nutrientKeys.push(el.shortName));
        // sostituisci < e >
        nutrientKeys = nutrientKeys.map((elementString: string) => {
          elementString = elementString.replace(/&gt;/g, '>');
          elementString = elementString.replace(/&lt;/g, '<');
          return elementString;
        });
        console.log(nutrientKeys);
        this.xmlData = {
          sampleName: data.labResult.sampleName,
          sampleTimestamp: data.labResult.sampleTimestamp,
          sampleNumber: data.labResult.sampleNumber,
          siteName: data.labResult.siteName,
          productType: data.labResult.productType,
          calibrationName: data.labResult.calibrationName,
          instrumentSN: data.labResult.instrumentSN,
          nutrientComposition: {
            '>>MOISTURE': data.labResult.nutrientCompositions.nutrient[nutrientKeys.indexOf('>>MOISTURE')].amt,
            '<DRY MATT': data.labResult.nutrientCompositions.nutrient[nutrientKeys.indexOf('<DRY MATT')].amt,
            '>>PROTEIN': data.labResult.nutrientCompositions.nutrient[nutrientKeys.indexOf('>>PROTEIN')].amt,
            '>>FAT': data.labResult.nutrientCompositions.nutrient[nutrientKeys.indexOf('>>FAT')].amt,
            '>>ASH': data.labResult.nutrientCompositions.nutrient[nutrientKeys.indexOf('>>ASH')].amt,
            '>>ADF': data.labResult.nutrientCompositions.nutrient[nutrientKeys.indexOf('>>ADF')].amt,
            '>>NDF': data.labResult.nutrientCompositions.nutrient[nutrientKeys.indexOf('>>NDF')].amt,
            '<FIBER': data.labResult.nutrientCompositions.nutrient[nutrientKeys.indexOf('<FIBER')].amt,
            sCP: data.labResult.nutrientCompositions.nutrient[nutrientKeys.indexOf('sCP')].amt,
            '<SP %CP': data.labResult.nutrientCompositions.nutrient[nutrientKeys.indexOf('<SP %CP')].amt,
            '>>LIGNIN': data.labResult.nutrientCompositions.nutrient[nutrientKeys.indexOf('>>LIGNIN')].amt,
            ADICP: data.labResult.nutrientCompositions.nutrient[nutrientKeys.indexOf('ADICP')].amt,
            '<RUM SUGAR': data.labResult.nutrientCompositions.nutrient[nutrientKeys.indexOf('<RUM SUGAR')].amt,
            '>>PRERUP': data.labResult.nutrientCompositions.nutrient[nutrientKeys.indexOf('>>PRERUP')].amt,
            NIRDNDF: data.labResult.nutrientCompositions.nutrient[nutrientKeys.indexOf('NIRDNDF')].amt,
          }
        };
      }
      );
    }
    console.log(this.xmlData);
  }
}
