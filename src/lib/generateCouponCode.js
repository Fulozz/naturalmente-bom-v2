function generateCouponCode(couponDiscount, couponTitle){
    const couponCode = couponTitle
    .toUpperCase()
    .replace(/ /g, "") //

    return couponCode
}

module.exports= generateCouponCode