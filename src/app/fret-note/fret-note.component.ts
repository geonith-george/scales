import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fret-note',
  templateUrl: './fret-note.component.html',
  styleUrls: ['./fret-note.component.css']
})
export class FretNoteComponent implements OnInit {

  scale: string[];
  color: string;

  constructor() {
    this.color = "#AFC97E"; 
    this.scale = ['open','1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19'];
  }



  ngOnInit(): void {
  }

}
