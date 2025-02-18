
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HTTP_INTERCEPTORS, HttpClient, HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { CodeInputModule } from 'angular-code-input';
import { ActivateAccountComponent } from './pages/activate-account/activate-account.component';
import { HttpTokenInterceptor } from './services/fn/interceptor/http-token.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    ActivateAccountComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        FormsModule,
        CodeInputModule
    ],
  providers: [
    HttpClient,
        {
          provide: HTTP_INTERCEPTORS,
          useClass: HttpTokenInterceptor,
          multi: true
        }

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
