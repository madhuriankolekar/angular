import { Component, OnInit } from '@angular/core';
import { NgForm, FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UserserviceService } from 'src/app/service/userservice.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})

export class RegistrationComponent implements OnInit {

  registerForm = new FormGroup({
    firstName: new FormControl(''),
      lastName: new FormControl(''),
      emailId: new FormControl(''),
      password: new FormControl(''),
      mobileNumber: new FormControl('')
    })
  constructor(
       private userservice: UserserviceService,
      private router: Router,
      private snackbar:MatSnackBar
        ) {
   
}
ngOnInit() {
       
     }

     onSubmit(form: NgForm) {
      if (this.registerForm.invalid) {
        return;
      }
      console.log(this.registerForm.value);
    
      this.userservice.registration(this.registerForm.value).subscribe((user) => {
        console.log(user);
       this.snackbar.open('registration successfully verify by email', 'Ok', { duration: 3000 });
    
      },
        (error: any) => {
          console.log(error);
        this.snackbar.open(error.error.description, 'error', { duration: 3000 });
        });
    }
       
    }

    




