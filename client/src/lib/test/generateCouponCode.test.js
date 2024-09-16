
const generateCouponCode = require('../generateCouponCode');


describe("Should auto generate an code using the title",()=> {
    test("transform title to code",()=>{
        const couponTitle = "blackfriday"
        const couponDiscount = 10
        expect(generateCouponCode(couponDiscount, couponTitle)).toBe("BLACKFRIDAY10")
    })
})