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
import {  MatInputModule, MatSnackBarModule, MatToolbarModule, MatSidenavModule, MatButtonModule, MatExpansionModule, MatTabsModule, MatCheckboxModule, MatListModule, MatButtonToggleModule, MatOptionModule, MatSelectModule, MatMenuModule, MatTooltipModule, MatDialogModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ForgottpasswordComponent } from './Component/forgottpassword/forgottpassword.component';
import { ResetpasswordComponent } from './Component/resetpassword/resetpassword.component';
import { DashboardComponent } from './Component/dashboard/dashboard.component';
import { LayoutModule } from '@angular/cdk/layout';
import { CreatenoteComponent } from './Component/createnote/createnote.component';
import { MainComponent } from './main/main.component';
import {MatIconModule} from '@angular/material/icon'
///import { NotesComponent } from './Component/notes/notes.component';
import { NoteCardComponent } from './Component/note-card/note-card.component';
import { EditNoteComponent } from './Component/edit-note/edit-note.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistrationComponent,
    
    ForgottpasswordComponent,
    ResetpasswordComponent,
    DashboardComponent,

    CreatenoteComponent,
    MainComponent,  
    NoteCardComponent, 
    EditNoteComponent
    
    
  ],
  imports: [
    MatSnackBarModule, MatSidenavModule,
    AppRoutingModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    MatFormFieldModule,
    FormsModule, MatToolbarModule,
    MatExpansionModule, MatTabsModule, MatCheckboxModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatListModule,
    MatButtonToggleModule,
    LayoutModule, MatOptionModule, MatSelectModule, MatMenuModule,MatIconModule,
    MatDialogModule, MatTooltipModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
