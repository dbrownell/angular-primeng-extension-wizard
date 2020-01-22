import { Component, OnInit } from '@angular/core';
import {Message} from 'primeng/components/common/api';

@Component({
  selector: 'app-user-data-wizard',
  templateUrl: './user-data-wizard.component.html',
  styleUrls: ['./user-data-wizard.component.css']
})
export class UserDataWizardComponent implements OnInit {

  constructor() { }
 activeIndex: number = 0;
    firstName: string;
    lastName: string;
    address: string;
 
    msgs: Message[] = [];
 
    next() {
        this.activeIndex++;
    }
 
    ok() {
        this.activeIndex = 0;
    }
 
    onChange(label: string) {
        this.msgs.length = 0;
        this.msgs.push({severity: 'info', summary: label});
    }
  ngOnInit() {
  }

}