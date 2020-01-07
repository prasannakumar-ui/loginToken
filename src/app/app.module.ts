import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageComponent } from './page/page.component';
import { LoginComponent } from './login/login.component';
// import { ServiceService } from './service.service';
// import { AuthGuard } from './auth.guard';

@NgModule({
  declarations: [
    AppComponent,
    PageComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
