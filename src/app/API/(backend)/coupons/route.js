import {NextResponse} from 'next/server';


export async function POST(request){
    try{
        const { campainName, code, discount, startDate, endDate } = await request.json();
        const newCoupon = { campainName, code, discount, startDate, endDate }
        console.log(newCoupon)
        return  NextResponse.json(newCoupon )
    } catch(error) {
        console.log(error)
        return NextResponse.JSON({message: "Server error", error}, { status : 500})
    }
}