import { Component } from '@angular/core';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  xmlData = `<?xml version="1.0" encoding="UTF-8"?>
<labAnalysis xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns="http://www.cargill.com/can">
    <labId>1</labId>
    <labResult>
        <sampleName>loietto trif san nicolaeddu con ferm</sampleName>
        <sampleTimestamp>2021-05-10T12:13:05.855</sampleTimestamp>
        <sampleNumber>5</sampleNumber>
        <siteName>DENULE ANTONIO</siteName>
        <productType>FASCIATO 2021</productType>
        <calibrationName>Pfr0719eh.TMP</calibrationName>
        <instrumentSN>346900F4</instrumentSN>
        <nutrientCompositions>
            <nutrient shortName="&gt;&gt;MOISTURE" amt="68.9"/>
            <nutrient shortName="&lt;DRY MATT" amt="31.1"/>
            <nutrient shortName="&gt;&gt;PROTEIN" amt="12.8"/>
            <nutrient shortName="&gt;&gt;FAT" amt="3.5"/>
            <nutrient shortName="&gt;&gt;ASH" amt="8.0"/>
            <nutrient shortName="&gt;&gt;ADF" amt="28.8"/>
            <nutrient shortName="&gt;&gt;NDF" amt="49.3"/>
            <nutrient shortName="&lt;FIBER" amt="28.3"/>
            <nutrient shortName="sCP" amt="7.8"/>
            <nutrient shortName="&lt;SP %CP" amt="61.4"/>
            <nutrient shortName="&gt;&gt;LIGNIN" amt="2.9"/>
            <nutrient shortName="ADICP" amt="0.4"/>
            <nutrient shortName="&lt;RUM SUGAR" amt="11.8"/>
            <nutrient shortName="&gt;&gt;PRERUP" amt="2.4"/>
            <nutrient shortName="NIRDNDF" amt="38.6"/>
        </nutrientCompositions>
    </labResult>
</labAnalysis>
`;

  options = {
    attributeNamePrefix: '@_',
    attrNodeName: 'attr', //default is 'false'
    textNodeName: '#text',
    ignoreAttributes: true,
    ignoreNameSpace: false,
    allowBooleanAttributes: false,
    parseNodeValue: true,
    parseAttributeValue: false,
    trimValues: true,
    cdataTagName: '__cdata', //default is 'false'
    cdataPositionChar: '\\c',
    parseTrueNumberOnly: false,
    arrayMode: false, //"strict"
    // attrValueProcessor: (val, attrName) => he.decode(val, { isAttributeValue: true }),//default is a=>a
    // tagValueProcessor: (val, tagName) => he.decode(val), //default is a=>a
    stopNodes: ['parse-me-as-string']
  };


  constructor() {
    // try {
    //   const jsonObj = parser.parse(this.xmlData, this.options, true);
    //   console.log(jsonObj);
    // } catch (error) {
    //   console.log(error.message);
    // }
  }

}
