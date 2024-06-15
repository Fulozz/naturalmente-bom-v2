import toast from "react-hot-toast";

export async function makePostRequest(
    setLoading, endpoint, data, resourceName, reset
) {
    try {
        setLoading(true);
        const baseUrl = process.env.NEXT_PUBLIC_API_URL;
        const response = await fetch(`${baseUrl}/${endpoint}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        })
        if(!response.ok){
            setLoading(false);
            if(response.status === 400){
                toast.error(`Houve um erro ao criar ${resourceName}, tente novamente`)
            }
            toast.error(`Houve um erro ao criar ${resourceName}, tente novamente`)
        }
        if(response.ok){
            setLoading(false);
            toast.success(`${resourceName} criado com sucesso!`)
            reset();
        }
    } catch (error) {
        setLoading(false);
        console.log(error);
      }
}