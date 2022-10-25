import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { CaseComponent } from './case/case.component';
import { AppComponent } from './app.component';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppComponent, CaseComponent],
  exports: [CaseComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
