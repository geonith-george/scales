import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-element-color',
  templateUrl: './element-color.component.html',
  styleUrls: ['./element-color.component.css']
})
export class ElementColorComponent implements OnInit {

  @Input() note: string;

  constructor() { }

  ngOnInit(): void {
  }

}
