import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegistrationComponent } from './Component/registration/registration.component';
import { LoginComponent } from './Component/login/login.component';
import { ResetpasswordComponent } from './Component/resetpassword/resetpassword.component';
import { ForgottpasswordComponent } from './Component/forgottpassword/forgottpassword.component';
import { DashboardComponent } from './Component/dashboard/dashboard.component';
import { MainComponent } from './main/main.component';
import { CreatenoteComponent } from './Component/createnote/createnote.component';
import { EditNoteComponent } from './Component/edit-note/edit-note.component';
import { NoteCardComponent } from './Component/note-card/note-card.component';


const routes: Routes = [{
  path:'',redirectTo:'login',pathMatch:'full'
},
  {
    path:"registration",component:RegistrationComponent
  },
  {
   path:"login",component:LoginComponent
  },
  {path:"resetpassword",component: ResetpasswordComponent
  },
  {
    path:"forgotpassword",component:ForgottpasswordComponent
  },
  {
    path:"dashboard",component: DashboardComponent,
    children:
     [
       { path: "main", component: MainComponent }
      
      ],
    }
  
  


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]


  
})
export class AppRoutingModule { }
