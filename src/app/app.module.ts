import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BlanckpageComponent } from './layout/blanckpage/blanckpage.component';
import { FullpageComponent } from './layout/fullpage/fullpage.component';
import { NavbarComponent } from './share/navbar/navbar.component';
import { MysidebarComponent } from './share/mysidebar/mysidebar.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    BlanckpageComponent,
    FullpageComponent,
    NavbarComponent,
    MysidebarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    BrowserAnimationsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
