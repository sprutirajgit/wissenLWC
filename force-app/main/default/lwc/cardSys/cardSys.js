import { LightningElement,wire } from 'lwc';
import getsObjectDetails from '@salesforce/apex/LwcSObjectIterationController.getsObjectDetails';
import getContactDetails from '@salesforce/apex/LwcSObjectIterationController.getContactDetails';
import getOppDetails from '@salesforce/apex/LwcSObjectIterationController.getOppDetails';
export default class CardSys extends LightningElement {
   @wire(getsObjectDetails) accounts;
   @wire(getContactDetails) contacts;
   @wire(getOppDetails) Opportunities;
}