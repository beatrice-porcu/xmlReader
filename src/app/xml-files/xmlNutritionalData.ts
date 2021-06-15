/* eslint-disable @typescript-eslint/naming-convention */
export interface XmlNutritionalData {
  sampleName: string;
  sampleTimestamp: Date;
  sampleNumber: number;
  siteName: string;
  productType: string;
  calibrationName: string;
  instrumentSN: string;
  nutrientComposition: {
    '>>MOISTURE': number;
    '<DRY MATT': number;
    '>>PROTEIN': number;
    '>>FAT': number;
    '>>ASH': number;
    '>>ADF': number;
    '>>NDF': number;
    '<FIBER': number;
    'sCP': number;
    '<SP %CP': number;
    '>>LIGNIN': number;
    'ADICP': number;
    '<RUM SUGAR': number;
    '>>PRERUP': number;
    'NIRDNDF': number;
  };
}
