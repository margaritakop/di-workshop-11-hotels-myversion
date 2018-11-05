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

    urlSlug(){
        let slug = this.name + '_' + this.city
        slug = slug.replace(/ /g, '_').toLowerCase() //search for space regular expressions everywhere, g is 'global' modifier
        return slug
    }
}
module.exports = Hotel