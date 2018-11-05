class Review {
    constructor (rating, text, date){
        this.rating = rating
        this.text = text
        this.date = new Date(date)
    }

    ratingAsStars(){
        var stars = ''
        for(var i=0; i < this.rating.floor; i++){
            stars = stars + '⭐️' ;
        }
    }
}
module.exports = Review