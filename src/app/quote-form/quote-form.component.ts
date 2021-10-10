import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Quote } from '../quote';


@Component({
  selector: 'quote-form',
  templateUrl: './quote-form.component.html',
  styleUrls: ['./quote-form.component.css']
})
export class QuoteFormComponent implements OnInit {
  constructor() { }

  ngOnInit() {
  }

  newQuote = new Quote(0,"","",new Date(),0,0,0);
  @Output() quoteAdd = new EventEmitter<Quote>();

  submitForm(){
    //Further Form Validation
    if(this.newQuote.quote.length == 0){
      alert("Form will not submit without an actual quote");
    } 
    else if(this.newQuote.author.length == 0){
      alert("Form will not submit without an author");
    }
    else if(!isNaN(parseInt(this.newQuote.author))){
      alert("Insert a valid author name, not numbers");
    }
    else {
      this.quoteAdd.emit(this.newQuote);
      this.newQuote = new Quote(0,"","",new Date(),0,0,0);
    }
    
  }
  

}
