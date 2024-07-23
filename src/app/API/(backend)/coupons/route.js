import {NextResponse} from 'next/server';


export async function POST(request){
    try{
        const { couponTitle, couponCode, couponDiscount, status, startDate, endDate } = await request.json();
        const newCoupon = { couponTitle, couponCode, couponDiscount,status, startDate, endDate }
        console.log(newCoupon)
        return  NextResponse.json(newCoupon, { status : 201})
    } catch(error) {
        console.log(error)
        return NextResponse.JSON({message: "Falhou ao criar o coupon", error}, { status : 500})
    }
}
