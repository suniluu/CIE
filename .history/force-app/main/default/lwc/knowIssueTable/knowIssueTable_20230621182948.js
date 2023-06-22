import { LightningElement,wire,track,api } from 'lwc';
import getRecords from '@salesforce/apex/KnowIssueTable.getRecords';
export default class KnowIssueTable extends LightningElement {





    @wire(getRecords)
    getrecs
}