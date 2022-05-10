import { LightningElement } from 'lwc';
import myPNG_icon from '@salesforce/resourceUrl/certificate';
import myPNG2_icon from '@salesforce/resourceUrl/adm201';
import myPNG3_icon from '@salesforce/resourceUrl/pd1';
import myPNG4_icon from '@salesforce/resourceUrl/ranger';

export default class Demo extends LightningElement {
    certificate = myPNG_icon;
    adm201 = myPNG2_icon;
    pd1 = myPNG3_icon;
    ranger = myPNG4_icon;
}