import { Component, OnInit, Input } from '@angular/core';
import { UserserviceService } from 'src/app/service/userservice.service';
import { MatSnackBar } from '@angular/material';
import { Router } from '@angular/router';
import { FormGroup } from '@angular/forms';
import { NotesserviceService } from 'src/app/service/notesservice.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})

export class DashboardComponent implements OnInit {
  dashboard:FormGroup
 
note: any;
  archiveNotes: any;
  TrashNotes: any;

  constructor(private router: Router, private userService:  UserserviceService,
    private snackBar: MatSnackBar,private notesService:  NotesserviceService) { }
  pic = localStorage.getItem('profilePic');
  user = JSON.parse(localStorage.getItem('user'));
  Notes: any;
  @Input() options
  ngOnInit() {
    console.log(this.user);

  }

  logout() {
    this.userService.logout();
    localStorage.clear();
    console.log('User logged out')
    this.router.navigate(['/login']);
  }
  getNotes() {
    this.router.navigate(['/main'])
  }
  getArchivededNotes() {
    this.router.navigate(['/dashBoard/archiveNotes'])
  }
  getTrash() {
    this.router.navigate(['/dashBoard/trashNotes'])
  }

}



