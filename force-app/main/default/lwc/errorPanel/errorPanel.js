import { LightningElement,api } from 'lwc';
import { NavigationMixin } from 'lightning/navigation';
export default class ErrorPanel extends NavigationMixin (LightningElement) {
    @api recordId;
    handleNew() {
        this[NavigationMixin.Navigate]({
            type: 'standard__objectPage',
            attributes: {
                objectApiName: 'Account',
                actionName: 'new'
            },
        });
}
handleEdit() {
        this[NavigationMixin.Navigate]({
            type: 'standard__objectPage',
            attributes: {
                objectApiName: 'Contact',
                actionName: 'new'
            },
        });
}
handleEdit() {
    this[NavigationMixin.Navigate]({
        type: 'standard__objectPage',
        attributes: {
            objectApiName: 'Opportunity',
            actionName: 'new'
        },
    });
}
handleEdit() {
    this[NavigationMixin.Navigate]({
        type: 'standard__objectPage',
        attributes: {
            objectApiName: 'Quote',
            actionName: 'new'
        },
    });
}
handleEdit() {
    this[NavigationMixin.Navigate]({
        type: 'standard__objectPage',
        attributes: {
            objectApiName: 'Lead',
            actionName: 'new'
        },
    });
}
}