import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-string',
  templateUrl: './string.component.html',
  styleUrls: ['./string.component.css']
})
export class StringComponent implements OnInit {

  index_string_name: number;
  chromaic_scale: string[];
  count: number;
  keys: string[];
  val: number[];

  color: string;

  frets: string[];

  @Input() string_name: string;
  @Input() scale: string[];

  constructor() {
    this.chromaic_scale=[];
    this.keys = ['a', 'a#', 'b', 'c', 'c#', 'd', 'd#', 'e', 'f', 'f#', 'g' , 'g#'];
    this.val  = [ 0 ,  1  ,  2 ,  3 ,  4  ,  5 ,  6  ,  7 ,  8 ,  9  ,  10 ,  11 ];
    this.color= "#CA7DF9";
  }

  
  strings(string_name: string, scale: string[]){
    this.chromaic_scale=[];
    this.index_string_name = this.keys.indexOf(string_name);
    this.count = this.keys.indexOf(string_name);

    for(let i=this.index_string_name; i<20+(this.index_string_name); i++)
    {
      if(this.count>=12)
      {
        this.count = this.count-12;
      }

      if(scale.includes(this.keys[this.count]))
      {
        console.log( this.keys[this.count] );
      }

      this.chromaic_scale.push(this.keys[this.count]);

      this.count = this.count+1;
    }
    console.log(this.chromaic_scale);
  }

  isThere(key: string):boolean{
    if(this.scale.includes(key))
    {
      return true;
    }
    return false;
  }

  ngOnInit(): void {
    this.strings(this.string_name,this.scale);
  }

}
