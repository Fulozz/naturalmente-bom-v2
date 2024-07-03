import {NextResponse} from 'next/server';


export async function POST(request){
    try{
        const { title, url , imageUrl, description } = await request.json();
        const newSlider = { title, url , imageUrl, description }
        console.log(newSlider)
        return  NextResponse.json(newSlider, { status : 201})
    } catch(error) {
        console.log(error)
        return NextResponse.JSON({message: "Falhou ao criar o Slider", error}, { status : 500})
    }
}