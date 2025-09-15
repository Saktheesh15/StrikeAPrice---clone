import { Component, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent implements AfterViewInit {
  words = ['competitor price tracking', 'AI-driven recommendations', 'real-time monitoring'];
  current = '';
  idx = 0;
  letter = 0;
  forward = true;
  ngAfterViewInit(){
    setTimeout(()=>this.typeLoop(),300);
  }
  typeLoop(){
    const word = this.words[this.idx];
    if(this.forward){
      this.letter++;
      this.current = word.slice(0,this.letter);
      if(this.letter === word.length){ this.forward = false; setTimeout(()=>this.typeLoop(),1200); return; }
    } else {
      this.letter--;
      this.current = word.slice(0,this.letter);
      if(this.letter === 0){ this.forward = true; this.idx = (this.idx+1)%this.words.length; }
    }
    setTimeout(()=>this.typeLoop(), this.forward?80:40);
  }
}