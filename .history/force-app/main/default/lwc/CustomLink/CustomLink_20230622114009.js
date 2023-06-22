import { LightningElement, track,wire } from 'lwc';
import getAccountList from '@salesforce/apex/AccountDataController.fetchAccounts';

const columns=[



{label: 'Account Name', fieldName: 'Account_URL', type: 'url', typeAttributes: {label: { fieldName: 'Name' }, target: '_blank'} },



{label: 'Account Industry', fieldName: 'Industry'},



{label: 'Account Description', fieldName: 'Description'},



];

export default class TestLWCTableExample extends LightningElement {
    @track error;
    @track columns = columns;
    @track accList;

 @wire (getAccountList) accList({error, data})
 {
  if(data)
 {
  let accParsedData=JSON.parse(JSON.stringify(data));
  let baseUrlOfOrg= 'https://'+location.host+'/';

 accParsedData.forEach(acc => {

 if(acc.Id){

    acc.Account_URL=baseUrlOfOrg+acc.Id;
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


