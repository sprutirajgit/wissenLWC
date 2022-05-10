import { LightningElement,wire} from 'lwc';
import getsObjectDetails from '@salesforce/apex/LwcSObjectIterationController.getsObjectDetails';
export default class Card extends LightningElement {
    @wire(getsObjectDetails) accounts;
    
}