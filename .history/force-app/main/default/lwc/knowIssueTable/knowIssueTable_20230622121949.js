import { LightningElement,wire,track,api } from 'lwc';
import getRecords from '@salesforce/apex/KnowIssueTable.getRecords';
export default class KnowIssueTable extends LightningElement {

    @track columns = [
        {label:'Name',fieldName:'Name_URL',
        type: 'url',
        typeAttributes: { label: { fieldName: 'Name' }, target: '_blank' }},
        {label:'Issue',fieldName:'Issue__c',type:'text'},
        {label:'Description',fieldName:'Description__c',type:'text'}
    ];
   
    
    @track Records;

    @wire (getRecords) Records({error, data})
    {
     if(data)
    {
     let ParsedData=JSON.parse(JSON.stringify(data));
     let baseUrlOfOrg= 'https://commercecx34-dev-ed.lightning.force.com'+'/';
   
    ParsedData.forEach(rec => {
   
    if(rec.Id){
   
        rec.Name_URL=baseUrlOfOrg+rec.Id+'/view';
         }
   
    });
    this.Records = ParsedData;
     }
     else if(error)
     {
        this.error = error;
     }
   
       }
   
}
