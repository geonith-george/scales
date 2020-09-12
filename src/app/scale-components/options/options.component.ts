import { Component, OnInit } from '@angular/core';
import { stringify } from '@angular/compiler/src/util';

@Component({
  selector: 'app-options',
  templateUrl: './options.component.html',
  styleUrls: ['./options.component.css']
})
export class OptionsComponent implements OnInit {

  major: string;
  minor: string;
  keys: string[];
  val: number[];
  scale:  number[];
  scale_text: string[];
  index: number;
  k: string;
  s: string;
  chord: string[];
  index_string_name: number;
  chromaic_scale: string[];
  count: number;
  list_of_scales: string[];

  constructor() { 
    // this.major = 'w w h w w w h';
    // this.minor = 'w h w w h w w';
    this.list_of_scales=['major','minor']
    this.keys = ['a', 'a#', 'b', 'c', 'c#', 'd', 'd#', 'e', 'f', 'f#', 'g' , 'g#'];
    this.val  = [ 0 ,  1  ,  2 ,  3 ,  4  ,  5 ,  6  ,  7 ,  8 ,  9  ,  10 ,  11 ];
    this.scale = [];
    this.scale_text = [];
    this.chord=[];
    this.chromaic_scale=[];
  }

  print_scale(k2: HTMLInputElement, s2: HTMLInputElement) {


    if (this.keys.includes(k2.value.toLowerCase())==false || this.list_of_scales.includes(s2.value.toLowerCase())==false){
      this.scale = [];
      this.scale_text = [];
      this.chord=[];
      this.chromaic_scale=[];
       return 0; 
      }

    this.k= k2.value.toLowerCase();
    this.scale_text = [];

    this.s ='w w h w w w h';
    if (s2.value.toLowerCase()=='major'){ this.s= 'w w h w w w h'; this.chord=['I ii iii IV V vi viiᵒ']}
    if (s2.value.toLowerCase()=='minor'){ this.s= 'w h w w h w w'; this.chord=['i iiᵒ III iv v VI VII']}

    this.scale = [];
    
    this.index = this.keys.indexOf(this.k);

    this.scale.push(this.index);
  
    for(let i=0; i<this.s.length; i++ ){
     
      if( this.s[i] == 'w'){
        if(this.index>=12 ){
          this.index = this.index - 12;
          this.index = this.index + 2;
          this.scale.push(this.index);
        }
        else{
          this.index= this.index + 2;
          if (this.index>=12){
            this.index = this.index -12;
          }
          this.scale.push(this.index);
        }

      }

      else if( this.s[i] == 'h'){
        if(this.index>=12 ){
          this.index = this.index - 12;
          this.index = this.index + 1;
          this.scale.push(this.index);
        }
        else{
          this.index= this.index + 1;
          if (this.index>=12){
            this.index = this.index -12;
          }
          this.scale.push(this.index);
        }
        
      }

    }

    for(let i=0;i<this.scale.length;i++){
      this.scale_text.push(this.keys[this.scale[i]]);
      }
  }

  ngOnInit(): void {
  }
}