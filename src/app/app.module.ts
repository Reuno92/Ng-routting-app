import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DashboardModule } from './dashboard/dashboard.module';
import { appRouting } from './app.routing';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { DashboardComponent } from './dashboard/dashboard.component';

import { AuthGuard } from './shared/guards/auth-guard.service';
import { CanDeactivateGuard } from './shared/guards/can-deactivate-guard.service';

@NgModule({
  declarations: [
    AppComponent,
      HomeComponent,
      ContactComponent,
      NotFoundComponent,
      DashboardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    DashboardModule,
    appRouting,
  ],
  providers: [
      AuthGuard,
      CanDeactivateGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
