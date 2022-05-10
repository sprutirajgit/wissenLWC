
   import { LightningElement, api } from 'lwc';
 
export default class LwcDisplayFieldsonCheck extends LightningElement {
    @api recordId;
    @api objectApiName='Account'; 
    showFields = true;
    
    toggleFields() {
      this.showFields = !this.showFields;
    }
 
}