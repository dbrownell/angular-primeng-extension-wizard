import { Component, OnInit } from '@angular/core';
//import {Message} from 'primeng/components/common/api';
import {MenuItem} from 'primeng/api';
import {Message} from 'primeng//api';
import {MessageService} from 'primeng/api';

@Component({
  selector: 'app-user-data-wizard',
  templateUrl: './user-data-wizard.component.html',
  providers: [MessageService],
  styleUrls: ['./user-data-wizard.component.css']
})
export class UserDataWizardComponent implements OnInit {

    ngOnInit() {
  }
   constructor(private messageService: MessageService) {}

        addSingle() {
            this.messageService.add({severity:'success', summary:'Service Message', detail:'Via MessageService'});
        }

        addMultiple() {
            this.messageService.addAll([{severity:'success', summary:'Service Message', detail:'Via MessageService'},
                            {severity:'info', summary:'Info Message', detail:'Via MessageService'}]);
        }
        
        clear() {
            this.messageService.clear();
        }

}