import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HeaderModule, 
  OverflowModule, 
  NavigationModule, 
  AppsMenuModule, 
  ButtonModule, 
  TabGroupModule, 
  AccordionModule, 
  BadgeModule, 
  MultiColContainerModule,
  CardModule,
  ListModule,
  SelectModule,
  ChipListModule,
  DataGridModule,
  PanelModule
} from 'leds-lib';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatTabsModule } from '@angular/material/tabs';
import { MatCardModule } from '@angular/material/card';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { CheckboxModule } from 'leds-lib'

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ButtonModule,
    HeaderModule,
    OverflowModule,
    NavigationModule,
    AppsMenuModule,
    MatTabsModule,
    TabGroupModule,
    MatCardModule,
    AccordionModule, 
    BadgeModule,
    MatExpansionModule,
    CheckboxModule,
    MatCheckboxModule,
    MultiColContainerModule,
    CardModule,
    ListModule,
    TabGroupModule,
    SelectModule,
    ChipListModule,
    DataGridModule,
    PanelModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
