import { LightningElement,api,wire } from 'lwc';
import { NavigationMixin } from 'lightning/navigation';
import getTeam from '@salesforce/apex/TeamNav.getTeam';

export default class AccountNav extends NavigationMixin (LightningElement) {
    @wire(getTeam) TeamProfile;
   
    @api recordId;
    // Navigate to Edit Account Page
    navigateToEditAccountPage(event)
    {
      this[NavigationMixin.Navigate]({
          type:'standard__recordPage',
          attributes:
          {
              recordId:event.target.dataset.id,
              objectApiName:'Team_Profile__c',
              actionName:'edit'
          }
      })
    }
}