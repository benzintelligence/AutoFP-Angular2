import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { LayoutModule } from './compartilhado/layout/layout.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    LayoutModule,
    RouterModule.forRoot([
      { path: '', component:  }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
