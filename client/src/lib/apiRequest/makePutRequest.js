import toast from "react-hot-toast";

export async function makePutRequest(
    setLoading, endpoint, data, resourceName
) {
    try {
        setLoading(true);
        const baseUrl = process.env.NEXT_PUBLIC_API_URL;
        const response = await fetch(`${baseUrl}/${endpoint}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        })
        if(!response.ok){
            setLoading(false);
            toast.error(`Houve um erro ao atualizar ${resourceName}, tente novamente`)
        }
        if(response.ok){
            console.log(response);
            setLoading(false);
            toast.success(`${resourceName} Updated Successfully`);
            redirect();
        }
    } catch (error) {
        setLoading(false);
        console.log(error);
      }
}