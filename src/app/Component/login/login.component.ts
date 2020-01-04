import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, NgForm } from '@angular/forms';
import { UserserviceService } from 'src/app/service/userservice.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm:FormGroup
constructor(private userservice:UserserviceService,
  private router:Router,private snackbar:MatSnackBar) { }

ngOnInit() {
  this.loginForm=new FormGroup({
    emailId:new FormControl(),
    password:new FormControl()
  })
}

onSubmit(form: NgForm) {
  if (this.loginForm.invalid) {
      return;
 }
  console.log(this.loginForm.value);
 
   this.userservice.login(this.loginForm.value).subscribe( (user) => {
     console.log(user);
     localStorage.setItem("token",user.response)
     this.router.navigateByUrl("dashboard")
     this.snackbar.open('Login Successfully Done', 'Ok', {duration: 3000});
 },
 (error: any) => {
     console.log( error);
     this.snackbar.open("error.error.description", 'error', {duration: 3000});
 });
 }
 
 forget(){
  this.router.navigateByUrl("forgottpassword")

 }
}

