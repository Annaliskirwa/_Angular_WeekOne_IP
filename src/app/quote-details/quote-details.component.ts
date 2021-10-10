import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Quote } from '../quote';
import { faThumbsUp, faThumbsDown } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'quote-details',
  templateUrl: './quote-details.component.html',
  styleUrls: ['./quote-details.component.css']
})
export class QuoteDetailsComponent implements OnInit {
  constructor() { }

  ngOnInit() {
  }
  faThumbsDown = faThumbsDown;
  faThumbsUp = faThumbsUp;

  @Input() quote: Quote;
  @Output() upVote = new EventEmitter();
  @Output() downVote = new EventEmitter();
  @Output() quoteDel = new EventEmitter();
  @Output() hide = new EventEmitter();

  quoteUpvote(){
    this.upVote.emit();
  }

  quoteDownvote(){
    this.downVote.emit();
  }

  quoteDelete(){
    this.quoteDel.emit();
  }

  detailsHide(){
    this.hide.emit();
  }
  

}
