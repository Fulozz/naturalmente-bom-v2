import {NextResponse} from 'next/server';


export async function POST(request){
    try{
        const { couponTitle, couponCode, couponDiscount, status, startDate, endDate } = await request.json();
        const newCoupon = { couponTitle, couponCode, couponDiscount, startDate, endDate }
        console.log(newCoupon)
        return  NextResponse.json(newCoupon )
    } catch(error) {
        console.log(error)
        return NextResponse.JSON({message: "Server error", error}, { status : 500})
    }
}