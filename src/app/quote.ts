export class Quote {
    showDetails: boolean;
    showDetailsBtn: boolean;
    daysPassed: number;
    constructor(
        public id: number,
        public quote: string,
        public author: string,
        public creationDate: Date,
        public upvote: number,
        public downvote: number,
        public voteDifference: number
    ){
        this.showDetails = false;
        this.showDetailsBtn = true;
    }
}
