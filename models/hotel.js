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
        }
    }

    ratingAsStars(){
        if (this.reviewCount() == 0){
            return ''
        }
    }
}
module.exports = Hotel