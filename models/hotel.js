class Hotel {
    constructor(name, city) {
        this.name = name
        this.city = city
        this.reviews = []
    }

    reviewCount(){
        return this.reviews.length
    }

    rating(){
        if (this.reviewCount() == 0){
            return 0
        } else {
            let r = 0
            for(var i=0; i < this.reviewCount(); i++){
                r = r + this.reviews[i].rating
            }
            return r/i
        }
    }

    ratingAsStars(){
        if (this.reviewCount() == 0){
            return ''
        } else {
            var stars = ''
            for(var i=0; i < this.rating(); i++){
                stars = stars + "⭐️" ;
            }
            return stars
        }
    }

    urlSlug(){
        let slug = this.name + '_' + this.city
        slug = slug.replace(/ /g, '_').toLowerCase() //search for space regular expressions everywhere, g is 'global' modifier
        return slug
    }
    addReview(review){
        this.reviews.push(review)
    }
    toJSON(){
        let hotel = {
            name: this.name,
            city: this.city,
            reviewCount: this.reviewCount(),
            rating:this.rating(),
            ratingAsStars:this.ratingAsStars(),
            urlSlug:this.urlSlug(),
            reviews :this.reviews
        }
        return JSON.stringify(hotel)
    }
}
module.exports = Hotel