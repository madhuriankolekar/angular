import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class  NotesserviceService{
  NotesUrl = environment.NotesUrl;
  getCollabNotes() {
    return this.http.get(this.NotesUrl + "getNotes")
  }

private API_URL=environment.NotesUrl///.notesApiUrl;//.notes.notesApiUrl;
   private httpOptions = {
     headers: new HttpHeaders({ 'Content-Type': 'application/json' })
   };

  constructor(private http:HttpClient) {
    
  }

  addNote(note){
    return this.http.post(this.API_URL+'notes/iscreate',note);
  }
  
    getAllNotes() {
      console.log("notes services");
      return this.http.get(this.NotesUrl + "getNotes")
    }
  }

  //updateNote()
  {

  }
  


