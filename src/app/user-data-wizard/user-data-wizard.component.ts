import { Component, OnInit } from '@angular/core';
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
  
   showSuccess() {        
       this.messageService.add({severity:'success', summary:'Success Message', detail:'Order submitted'});
    }

    showInfo() {   
      this.messageService.clear();    
      this.messageService.add({severity:'info', summary:'Info Message', detail:'PrimeNG rocks'});
    }

    showWarn() {
      this.messageService.clear();
      this.messageService.add({severity:'warn', summary:'Warn Message', detail:'There are unsaved changes'});
    }

    showError() {
      this.messageService.clear();
      this.messageService.add({severity:'error', summary:'Error Message', detail:'Validation failed'});
    }

    showMultiple() {
      this.messageService.clear();
      this.messageService.addAll([{severity:'info', summary:'Message 1', detail:'PrimeNG rocks'},
      {severity:'info', summary:'Message 2', detail:'PrimeUI rocks'},
      {severity:'info', summary:'Message 3', detail:'PrimeFaces rocks'}]);
    }
    
    showViaService() {
      this.messageService.clear();
      this.messageService.add({severity:'success', summary:'Service Message', detail:'Via MessageService'});
    }

      
    clear() {
      this.messageService.clear();
    }

}