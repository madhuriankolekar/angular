import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './Component/login/login.component';
import { RegistrationComponent } from './Component/registration/registration.component';
import { HttpClientModule } from '@angular/common/http';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import {  MatInputModule, MatSnackBarModule, MatIconModule, MatToolbarModule, MatSidenavModule, MatButtonModule, MatExpansionModule, MatTabsModule, MatCheckboxModule, MatListModule, MatButtonToggleModule, MatOptionModule, MatSelectModule, MatMenuModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ForgottpasswordComponent } from './Component/forgottpassword/forgottpassword.component';
import { ResetpasswordComponent } from './Component/resetpassword/resetpassword.component';
import { DashboardComponent } from './Component/dashboard/dashboard.component';
import { LayoutModule } from '@angular/cdk/layout';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistrationComponent,
    
    ForgottpasswordComponent,
    ResetpasswordComponent,
    DashboardComponent,
    
    
  ],
  imports: [
    MatSnackBarModule,MatSidenavModule,
    AppRoutingModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    MatFormFieldModule,
    FormsModule, MatToolbarModule,
    MatExpansionModule, MatTabsModule, MatCheckboxModule, MatIconModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatListModule,
    MatButtonToggleModule,
    LayoutModule,MatOptionModule,MatSelectModule,MatMenuModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
