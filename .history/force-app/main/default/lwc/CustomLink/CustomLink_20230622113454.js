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



     





          


            this.accList = accParsedData;



        }



      
    }




