import {NextResponse} from 'next/server';


export async function POST(request){
    try{
        const { title, description, slug, imageUrl } = await request.json();
        const newCategory = { title, description, slug, imageUrl }
        console.log(newCategory)
        return  NextResponse.json(newCategory )
    } catch(error) {
        console.log(error)
        return NextResponse.JSON({message: "Server error", error}, { status : 500})
    }
}