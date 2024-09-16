import {NextResponse} from 'next/server';


export async function POST(request){
    try{
        const { title, description, categoryID, farmerID, amount, price, imageUrl } = await request.json();
        const newProduct = { title, description, categoryID, farmerID, amount, price, imageUrl }
        console.log(newProduct)
        return  NextResponse.json(newProduct )
    } catch(error) {
        console.log(error)
        return NextResponse.JSON({message: "Falhou ao criar o produto", error}, { status : 500})
    }
}