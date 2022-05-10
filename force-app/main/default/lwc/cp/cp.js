import { LightningElement,track } from 'lwc';
import myPNG_icon from '@salesforce/resourceUrl/pic';
export default class CoreTeam extends LightningElement {
    pic = myPNG_icon;
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