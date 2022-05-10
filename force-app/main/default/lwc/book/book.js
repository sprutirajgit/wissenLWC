import { LightningElement,track,api} from 'lwc';
import { NavigationMixin } from 'lightning/navigation';
import getContactList from '@salesforce/apex/contactCon.getContactList';
import {ShowToastEvent} from 'lightning/platformShowToastEvent'
export default class Book extends NavigationMixin (LightningElement) {
    @api recordId;
    @track contactsRecord;
    searchValue = ' ';
    
    handleSearch(event) {
        this.searchValue=event.target.value;
        console.log('searchValue',this.searchValue);
        if (this.searchValue !== '') {
            getContactList({
                    searchKey: this.searchValue
                   
                })
                .then(result => {
                    // set @track contacts variable with return contact list from server  
                    this.contactsRecord = result;
                    console.log('result',result)
                })
                .catch(error => {
                   
                    const event = new ShowToastEvent({
                        title: 'Error',
                        variant: 'error',
                        message: error.body.message,
                    });
                    this.dispatchEvent(event);
                    // reset contacts var with null   
                    this.contactsRecord = null;
                });
        } else {
            // fire toast event if input field is blank
            const event = new ShowToastEvent({
                variant: 'error',
                message: 'Search text missing..',
            });
            this.dispatchEvent(event);
        }
    }
    navigateToEditContactPage(event)
    {
      this[NavigationMixin.Navigate]({
          type:'standard__recordPage',
          attributes:
          {
              recordId:event.target.dataset.id,
              objectApiName:'Contact',
              actionName:'edit'
          }
      })
    }
}
