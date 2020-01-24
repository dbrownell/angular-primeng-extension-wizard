import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-pe-step',
  templateUrl: './pe-step.component.html',
  styleUrls: ['./pe-step.component.css']
})
export class PeStepComponent implements OnInit {
  @Input() styleClass: string;
  @Input() label: string;
  active: boolean = false;
  constructor() { }

  ngOnInit() {
  }

}