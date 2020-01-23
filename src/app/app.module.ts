import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import {Component} from '@angular/core';
import {Message} from 'primeng/components/common/api';
import { AppComponent } from './app.component';
import { UserDataWizardComponent } from './user-data-wizard/user-data-wizard.component';
import {StepsModule} from 'primeng/steps';
import {ToastModule} from 'primeng/toast';
import {MessagesModule} from 'primeng/primeng';

@NgModule({
  imports:      [ BrowserModule, FormsModule, StepsModule, ToastModule ],
  declarations: [ AppComponent, UserDataWizardComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
