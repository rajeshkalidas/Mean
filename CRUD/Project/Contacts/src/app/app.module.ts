import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactListComponent } from './contact-list/contact-list.component';
import { HttpClientModule } from '@angular/common/http';
import { ContactService } from 'src/app/shared/contact.service';

@NgModule({
  declarations: [
    AppComponent,
    ContactListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule

  ],
  providers: [ContactService],
  bootstrap: [AppComponent]
})
export class AppModule { }
