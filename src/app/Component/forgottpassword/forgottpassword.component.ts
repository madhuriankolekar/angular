import { Component, OnInit } from '@angular/core';
import { UserserviceService } from 'src/app/service/userservice.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material';
import { FormGroup, FormControl, NgForm } from '@angular/forms';

@Component({
  selector: 'app-forgottpassword',
  templateUrl: './forgottpassword.component.html',
  styleUrls: ['./forgottpassword.component.scss']
})
export class ForgottpasswordComponent implements OnInit {
  forgetPassword: FormGroup;

constructor(private userservice:UserserviceService,
    private router:Router,
    private snackbar:MatSnackBar){ }

  ngOnInit() {
    this.forgetPassword=new FormGroup({
      emailId:new FormControl()
    })

  }

  onSubmit(form: NgForm) {
    if (this.forgetPassword.invalid) {
        return;

   }
    console.log(this.forgetPassword.value);
   
     this.userservice.forgetpassword(this.forgetPassword.value).subscribe( (user) => {
       console.log(user);
       this.snackbar.open('Reset Password link sent', 'Ok', {duration: 3000});
       
   },
   (error: any) => {
       console.log( error);
       this.snackbar.open('error.error.description', 'error', {duration: 3000});
   });
   }


}
