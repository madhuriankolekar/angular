import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material';
import { NotesserviceService } from '../service/notesservice.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

 
  constructor(private snackBar: MatSnackBar, private notesService:  NotesserviceService) { }

  allNotes: any;

  ngOnInit() {
    this.getNotes();
    this.getCollabNotes();
  }

  getNotes() {
    this.notesService.getAllNotes().subscribe((res: any) => {
      console.log(res.data);
      this.allNotes = res.data;
    }, error => {
      this.snackBar.open("register failed", "ok", { duration: 5000 });

    })
  }
  getCollabNotes() {
    this.notesService.getCollabNotes().subscribe((res: any) => {
      console.log("COLLab NoteS", res.data);
      let CollNotes = []
      let UserId = JSON.parse(localStorage.getItem('user'))._id
      res.data.forEach((e) => {
        if (e.collaboratorsId.includes(UserId)) {
          CollNotes.push(e)
        }
      })
      this.allNotes = this.allNotes.push(CollNotes);
    }, error => {
      console.log('Error in retreiving collab notes', error);


    })

  }

  receivednote($note) {
    // this.allNotes.push($note)
    this.getNotes()
  }


}
