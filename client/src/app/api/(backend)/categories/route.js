import {NextResponse} from 'next/server';


export async function POST(request){
    try{
        const { title, description, marketsID, slug, imageUrl } = await request.json();
        const newCategory = { title, description, marketsID, slug, imageUrl }
        console.log(newCategory)
        return  NextResponse.json(newCategory )
    } catch(error) {
        console.log(error)
        return NextResponse.JSON({message: "Falhou ao criar a Categoria", error}, { status : 500})
    }
}