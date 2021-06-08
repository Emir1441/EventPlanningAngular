import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { JwtModule } from '@auth0/angular-jwt';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RegisterComponent } from './register-event/register/register.component';
import { MainLayoutComponent } from './shared/main-layout/main-layout.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AdminModule } from './admin/admin.module';
import { EmailConfirmationComponent } from './email-confirmation/email-confirmation.component';
import { EventPageComponent } from './event-page/event-page.component';

export function tokenGetter() {
  return localStorage.getItem('jwt')
}

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    MainLayoutComponent,
    EmailConfirmationComponent,
    EventPageComponent,
  ],
  imports: [
    BrowserModule,
    AdminModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter,
        allowedDomains: [],
        disallowedRoutes: []
      }
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
