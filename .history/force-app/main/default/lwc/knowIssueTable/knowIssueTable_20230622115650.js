import { LightningElement,wire,track,api } from 'lwc';
import getRecords from '@salesforce/apex/KnowIssueTable.getRecords';
export default class KnowIssueTable extends LightningElement {

    @track columns = [
        {label:'Name',fieldName:'Name',
        type: 'Name_URL',
        typeAttributes: { label: { fieldName: 'Name' }, target: '_blank' }},
        {label:'Issue',fieldName:'Issue__c',type:'text'},
        {label:'Description',fieldName:'Description__c',type:'text'}
    ];
   
    
    @track accList;

    @wire (getRecords) accList({error, data})
    {
     if(data)
    {
     let accParsedData=JSON.parse(JSON.stringify(data));
     let baseUrlOfOrg= 'https://'+location.host+'/';
   
    accParsedData.forEach(acc => {
   
    if(acc.Id){
   
       acc.Name_URL=baseUrlOfOrg+acc.Id;
         }
   
    });
   
            this.accList = accParsedData;
   
           }
     else if(error)
   
           {
   
               this.error = error;
   
           }
   
       }
   
}
