import { LightningElement,wire} from 'lwc';
import getContacts from '@salesforce/apex/ContactSearch.getContacts';
import GENDER from '@salesforce/schema/Contact.Gender__c';
import CONTACT__OBJECT from '@salesforce/schema/Contact';
import { getObjectInfo,getPicklistValues } from 'lightning/uiObjectInfoApi';

export default class conListSearch extends LightningElement {
    searchKey
    @wire(getObjectInfo,{objectApiName:CONTACT__OBJECT})
    objectInfo
    @wire(getPicklistValues,{recordTypeId:'$objectInfo.data.defaultRecordTypeId',fieldApiName:GENDER})
    PicklistValues({data,error})
    {
        if(data)
        {
            console.log(data)
            this.LevelOptions=[...this.getLevel(data)]
        }
        if(error)
        {
            console.error(error)
        }
    }
    SelectedGender = '';
    LevelOptions=[]
       getLevel(data)
       {
          return data.values.map(item =>({
            value:item.value,label:item.value
          })
             
          )
       }
    handleChange(event) {
        this.SelectedGender= event.detail.value;
    }
    handleInput(event)
    {
     this.searchKey=event.target.value
     console.log(this.searchKey)
    }
    contactsRecord
@wire(getContacts,{name:'$searchKey',Gender:'$SelectedGender'})
getCons({data,error})
{
    if(data)
    {
        console.log(data)
        this.contactsRecord=data
    }
    if(error)
    {
        console.log(error)
    }

}
}
