const chai = require('chai');
const expect = chai.expect;

var Hotel = require('../models/hotel')
var Review = require('../models/review')

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
    
    //make and add some reviews
    let hotel2 = new Hotel("Hilton on the Hill", "Scotland UK")
    let review1 = new Review (5, "Excellent hotel, very clean", "2018-12-17")
    let review2 = new Review(1, "Terrible hotel, smelled of mice", "2018-01-01")
    hotel2.addReview(review1)
    hotel2.addReview(review2)

    it('should record reviews', ()=>{
        expect(hotel2.reviews).deep.equal([review1, review2])
        expect(hotel2.reviewCount()).equal(2)
    })

    it('should take an average of all ratings', () => {
        expect(hotel2.rating()).equal(3)
    })
    
    //hotel.ratingAsStars() //=> "⭐️⭐️⭐️"
});