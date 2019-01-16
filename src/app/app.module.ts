import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TableManagementComponent } from './table-management/table-management.component';

import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http'
import {HttpClientInMemoryWebApiModule} from 'angular-in-memory-web-api'
import {InMemoryDataService} from './in-memory-data.service';
import { LoginComponent } from './auth/login/login.component';
import { MainMenuComponent } from './main-menu/main-menu.component';
import { OrderComponent } from './order/order.component';
import { FoodMenuComponent } from './food-menu/food-menu.component'
import { AuthService } from './auth/auth.service';
import {AuthInterceptor} from './auth/auth.interceptor'
import { AuthGuard } from './auth/auth.guard';

@NgModule({
  declarations: [
    AppComponent,
    TableManagementComponent,
    LoginComponent,
    MainMenuComponent,
    OrderComponent,
    FoodMenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // FormsModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, {dataEncapsulation: false}
    ),
    ReactiveFormsModule
  ],
  providers: [
    AuthService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    },
    AuthGuard
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
