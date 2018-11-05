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
}
module.exports = Review