import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import {Component} from '@angular/core';
import {Message} from 'primeng/components/common/api';
import { AppComponent } from './app.component';
import { UserDataWizardComponent } from './user-data-wizard/user-data-wizard.component';
import {StepsModule} from 'primeng/steps';
import {ToastModule} from 'primeng/toast';
import { MessagesModule } from 'primeng/primeng';
import {ButtonModule} from 'primeng/button';
import { StepsComponent } from './steps/steps.component';
import {MenuItem} from 'primeng/api';
import { PeStepComponent } from './pe-step/pe-step.component';
import { PeStepsComponent } from './pe-steps/pe-steps.component';

@NgModule({
  imports:      [ 
  BrowserAnimationsModule,
  BrowserModule, 
  ButtonModule,
  FormsModule,
  MessagesModule, 
  StepsModule, 
  ToastModule,
   
  ],
  declarations: [ AppComponent, UserDataWizardComponent, StepsComponent, PeStepComponent, PeStepsComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
