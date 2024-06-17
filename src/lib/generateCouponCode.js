import toast from 'react-hot-toast';

function generateCouponCode(couponDiscount, couponTitle){
    console.log(couponDiscount)
    if(couponDiscount > 0 && couponDiscount < 100){
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
    // Validate discount (must be between 0 and 100)
    if (couponDiscount > 100) {
        return ({error: "Desconto invalido: Desconto precisa ser entre 0 e 100%."});
    }
}

module.exports= generateCouponCode