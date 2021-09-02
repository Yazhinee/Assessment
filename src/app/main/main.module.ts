import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainRoutingModule } from './main-routing.module';
import { MainComponent } from './components/main/main.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    MainRoutingModule,
    FormsModule
  ],
  declarations: [
    MainComponent
  ],
})
export class MainModule { }
