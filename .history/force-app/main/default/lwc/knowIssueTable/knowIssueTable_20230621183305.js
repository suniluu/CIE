import { LightningElement,wire,track,api } from 'lwc';
import getRecords from '@salesforce/apex/KnowIssueTable.getRecords';
export default class KnowIssueTable extends LightningElement {

    @track columns = [
        {label:'Name',fieldName:'Name',type:'text'},
        {label:'Issue',fieldName:'Issue__c',type:'text'},
        {label:'Description',fieldName:'Description__c',type:'text'}
    ];
   



    @wire(getRecords)
    getrecs
}