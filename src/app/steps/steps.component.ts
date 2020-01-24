import { Component, OnInit } from '@angular/core';
import {MenuItem} from 'primeng/api';
import {MessageService} from 'primeng/api';
@Component({
  selector: 'app-steps',
  templateUrl: './steps.component.html',
  providers: [MessageService],
  styleUrls: ['./steps.component.css']
})
export class StepsComponent implements OnInit {
items: MenuItem[];
activeIndex: number = 1;
  constructor(private messageService: MessageService) { }

  ngOnInit() {
        this.items = [{
                label: 'Personal',
                command: (event: any) => {
                    this.activeIndex = 0;
                    this.messageService.add({severity:'info', summary:'First Step', detail: event.item.label});
                }
            },
            {
                label: 'Seat',
                command: (event: any) => {
                    this.activeIndex = 1;
                    this.messageService.add({severity:'info', summary:'Seat Selection', detail: event.item.label});
                }
            },
            {
                label: 'Payment',
                command: (event: any) => {
                    this.activeIndex = 2;
                    this.messageService.add({severity:'info', summary:'Pay with CC', detail: event.item.label});
                }
            },
            {
                label: 'Confirmation',
                command: (event: any) => {
                    this.activeIndex = 3;
                    this.messageService.add({severity:'info', summary:'Last Step', detail: event.item.label});
                }
            }
        ];
    }

}