function generateCouponCode(couponDiscount, couponTitle){
        const initialCode = couponTitle
        .toUpperCase()
            .replace(/\s+/g, "-") // Replace spaces with dashes
            .replace(/[^\w\-]+/g, "") // Remove non-word characters except dashes
            .replace(/\-\-+/g, "-") // Replace multiple consecutive dashes with a single dash
            .replace(/^\-+/, "") // Remove dashes from the beginning
            .replace(/\-+$/, ""); // Remove dashes from the end
        let couponCode =  initialCode + couponDiscount
        return couponCode
}

module.exports = generateCouponCode