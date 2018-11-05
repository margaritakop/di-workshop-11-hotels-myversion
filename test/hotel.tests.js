const chai = require('chai');
const expect = chai.expect;

var Hotel = require('../models/hotel')

describe('Hotel', function() {

    let hotel = new Hotel("Hilton Metropole", "London")

    it ('should instanciate properly', ()=>{
        expect(hotel.name).equal("Hilton Metropole")
        expect(hotel.city).equal("London")
        expect(hotel.reviews).deep.equal([])
    })

    it ('should count reviews', ()=>{
        expect(hotel.reviewCount()).equal(0)
    })

    it ('should return 0 rating when no reviews', ()=>{
        expect(hotel.rating()).equal(0)

        //TODO: Implement a second test when array is not empty
    })

    it ('should expect no stars when there are no reviews', ()=>{
        expect(hotel.ratingAsStars()).equal('')

        //TODO: Implement a second test when array is not empty
    })

    it ('should return an _formatted string of the hotel', ()=>{
        expect(hotel.urlSlug()).equal("hilton_metropole_london")
    })

    it ('should return an _formatted string of the hotel with multiple spaces', ()=>{
        let hotel = new Hotel("Hilton Metropole", "London UK")
        expect(hotel.urlSlug()).equal("hilton_metropole_london_uk")
    })

    


    //methods once reviews were added
    //hotel.addReview(review1)
    //hotel.addReview(review2)

    //hotel.reviews //=> [<Review>, <Review>] (an array of two javascript objects representing your reviews)
    //hotel.reviewCount() //=> 2
    //hotel.rating() //=> 3 (the average or all reviews)
    //hotel.ratingAsStars() //=> "⭐️⭐️⭐️"
});