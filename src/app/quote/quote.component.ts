import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';


@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  constructor() { }

  ngOnInit() {
  }
  
  quotes: Quote[] = [
    new Quote(1," Some birds aren’t meant to be caged. Their feathers are just too bright and when they fly away, the part of you that knows it was a sin to lock them up does rejoice, but still, the place you live in is that much more drab and empty now that they’re gone.","Ellis Redding",new Date(1994,8,11),0,0,0),
    new Quote(2,"Scout: Atticus, he was real nice.Atticus: Most people are, Scout, when you finally see them","Atticus",new Date(1960,7,11),0,0,0),
    new Quote(3,"Some infinities are bigger than other infinities","John Green",new Date(2015,4,20),0,0,0),
    new Quote(4,"I can hear your heart,on the radio beat.They're playing 'Chasing Cars'and I thought of us","Ed Sheeran",new Date(2019,8,19),0,0,0)
  ];

  highestVotedQuote = {
    voteCount: 0,
    qID: 0,
    quote: "This is where the most voted quote will appear",
    author: "Developer"
  }

  //Button Click Functions
  showDetails(index: number){
    this.quotes[index].showDetails = true;
    this.quotes[index].showDetailsBtn = false;
  }

  hideDetails(index: number){
    this.quotes[index].showDetails = false;
    this.quotes[index].showDetailsBtn = true;
  }

  addQuote(quote){
    let quoteLength = this.quotes.length;
    quote.id = quoteLength + 1;
    quote.creationDate = new Date(quote.creationDate);
    if(quote.creationDate > new Date()){
      //if quote date is posted ahead of it's time, it should not be allowed.
      alert("Nice try! Time travelling are we? Future-dated quotes are not allowed");
    }
    else {
      this.quotes.push(quote);
    }
    
  }

  upvoteQuote(index: number){
    this.quotes[index].upvote += 1;
    this.quotes[index].voteDifference += 1;
    this.getHighestVoted();
  }
  downvoteQuote(index: number){
    this.quotes[index].downvote += 1;
    this.quotes[index].voteDifference -= 1;
    this.getHighestVoted();
  }
  deleteQuote(index: number){
    if(this.quotes[index].quote.length > 15){
      let shortenedQuote = (this.quotes[index].quote.substr(0,15).concat("..."));
      var confirmed = confirm(`Are you sure you want to delete the following quote: \"${shortenedQuote}\"`)
    }
    else {
      var confirmed = confirm(`Are you sure you want to delete the following quote: \"${this.quotes[index].quote}\"`)
    }

    if(confirmed){
      this.quotes.splice(index,1);
      this.getHighestVoted();
    }
  }

  //Functions
  getHighestVoted(){
    // It might not be the best optimized approach but atleast it works ^^
    var sortedArray = [];
    for(let i:number = 0; i<this.quotes.length;i++){
      sortedArray.push(this.quotes[i].voteDifference)
    }
    this.highestVotedQuote.voteCount = Math.max.apply(null,sortedArray)

    for(let i:number = 0; i<this.quotes.length;i++){
      if(this.highestVotedQuote.voteCount == this.quotes[i].voteDifference){
        this.highestVotedQuote.qID = this.quotes[i].id;
        this.highestVotedQuote.quote = this.quotes[i].quote;
        this.highestVotedQuote.author = this.quotes[i].author;
       }
    }
  }



}//end
