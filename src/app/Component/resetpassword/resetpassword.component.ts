import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, NgForm } from '@angular/forms';
import { UserserviceService } from 'src/app/service/userservice.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-resetpassword',
  templateUrl: './resetpassword.component.html',
  styleUrls: ['./resetpassword.component.scss']
})
export class ResetpasswordComponent implements OnInit {
resetPassword1: FormGroup;
token: string;

constructor(
  private userService: UserserviceService,
  private router: Router,
  private snackbar: MatSnackBar,
  private route: ActivatedRoute) { }


ngOnInit() {
  this.resetPassword1 = new FormGroup({
    password: new FormControl('')
  });
  this.route.paramMap.subscribe((params: ParamMap) => {
    this.token = params.get('token');
    
    console.log(this.token);
  });
}
onSubmitReset(form: NgForm) {
  console.log(form);
  if (this.resetPassword1.invalid) {
    return;
  }
  console.log(this.token);
  
  this.userService.resetPassword(this.resetPassword1.value).subscribe((user) => {
    console.log(user);
    this.snackbar.open('password changed', 'ok', { duration: 3000 });
    this.router.navigateByUrl('/login');
  },
    (error) => {
      console.log(error);
      this.snackbar.open(error.error.description, 'error', { duration: 3000 });
    });
}
}