import { LightningElement,track} from 'lwc';
import myPNG8_icon from '@salesforce/resourceUrl/badge';
import myPNG_icon from '@salesforce/resourceUrl/photo';
import myPNG2_icon from '@salesforce/resourceUrl/adm201';
import myPNG3_icon from '@salesforce/resourceUrl/pd1';
import myPNG4_icon from '@salesforce/resourceUrl/ranger';
import myPNG5_icon from '@salesforce/resourceUrl/man';
import myPNG6_icon from '@salesforce/resourceUrl/boy';
import myPNG7_icon from '@salesforce/resourceUrl/girl';

export default class New extends LightningElement {
    badge = myPNG8_icon;
    photo = myPNG_icon;
    adm201 = myPNG2_icon;
    pd1 = myPNG3_icon;
    ranger = myPNG4_icon;
    man=myPNG5_icon;
    boy=myPNG6_icon;
    girl = myPNG7_icon;
   
    @track isModalOpen = false;
    openModal() {
        // to open modal set isModalOpen tarck value as true
        this.isModalOpen = true;
    }
    closeModal() {
        // to close modal set isModalOpen tarck value as false
        this.isModalOpen = false;
    }
    submitDetails() {
        // to close modal set isModalOpen tarck value as false
        //Add your code to call apex method or do some processing
        this.isModalOpen = false;
    }
}