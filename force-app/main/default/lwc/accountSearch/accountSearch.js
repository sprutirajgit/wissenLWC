import { LightningElement,wire,track } from 'lwc';
import getAccounts from '@salesforce/apex/accountcls.searchAccountNameMethod';
const DELAY = 100;
export default class AccountSearch extends LightningElement {
    accountName='';
    @track accountList=[];
    @wire(getAccounts,{acctName:'$accountName'})
    retrieveAccounts({error, data}){
        if(data){
            this.accountList=data;          
        }
        else if(error){
        }
      
    }
handelkeyChange(event){
    const searchString = event.target.value;
    window.clearTimeout(this.dealyTimeout);
    this.dealyTimeout = setTimeout(()=>{
        this.accountName = searchString;
    },DELAY);
}
}