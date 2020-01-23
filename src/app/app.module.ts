import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import {Component} from '@angular/core';
import {Message} from 'primeng/components/common/api';
import { AppComponent } from './app.component';
import { UserDataWizardComponent } from './user-data-wizard/user-data-wizard.component';
import {StepsModule} from 'primeng/steps';


@NgModule({
  imports:      [ BrowserModule, FormsModule, StepsModule ],
  declarations: [ AppComponent, UserDataWizardComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
