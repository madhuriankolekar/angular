import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material';
import { NotesserviceService } from 'src/app/service/notesservice.service';
import { Note } from 'src/app/model/note';
import { UserserviceService } from 'src/app/service/userservice.service';
import { Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-createnote',
  templateUrl: './createnote.component.html',
  styleUrls: ['./createnote.component.scss']
})
export class CreatenoteComponent implements OnInit {
  constructor(private router: Router, private userService:UserserviceService,
    private snackBar: MatSnackBar, private notesService: NotesserviceService) { }
  card = false;
  title = new FormControl(null, Validators.required)
  description = new FormControl(null, Validators.required)
  @Output() noteAdded = new EventEmitter
  ngOnInit() {

  }
  cardSwap1() {

    this.card = !this.card;
    console.log(this.card);
  }
  cardSwap() {
    let note = { title: this.title.value, description: this.description.value }
    if (!this.title.value && !this.description.value) {
      this.card = !this.card;
      console.log(this.card);
    } else this.notesService.addNote(note).subscribe((res: any) => {
      console.log("added note", res)
      this.title.reset()
      this.description.reset()
      this.snackBar.open("succesfully added note", "ok", { duration: 5000 })
      this.cardSwap1()
      this.noteAdded.emit('true');
    }, error => {
      console.log("error", error);
      this.snackBar.open("failed to add note", "ok", { duration: 5000 })
    })
  }

}