import { Component, OnInit } from '@angular/core';
import {Message} from 'primeng/components/common/api';
import {MenuItem} from 'primeng/api';
import {Message} from 'primeng//api';
import {MessageService} from 'primeng/api';

@Component({
  selector: 'app-user-data-wizard',
  templateUrl: './user-data-wizard.component.html',
  providers: [ ],
  styleUrls: ['./user-data-wizard.component.css']
})
export class UserDataWizardComponent implements OnInit {

  constructor(messageService: MessageService) { } 
  ngOnInit() {
  }

}