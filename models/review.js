class Review {
    constructor (rating, text, date){
        this.rating = rating
        this.text = text
        this.date = new Date(date)
    }

    ratingAsStars(){
        var stars = ''
        for(var i=0; i < this.rating; i++){
            stars = stars + '⭐' ;
        }
        return stars
    }
    toJSON(){
        let review = {
            rating : this.rating,
            text : this.text, 
            date : new Date(this.date)
        }
        return JSON.stringify(review)
    }
}
module.exports = Review