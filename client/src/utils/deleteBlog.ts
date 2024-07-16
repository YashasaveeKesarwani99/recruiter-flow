export const deleteBlog = async (id: number) => {

    const url = import.meta.env.VITE_API_URL


    try {
        const response = await fetch(
            `${url}/blogs/${id}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json' 
                  },
            }
        )
        
        return response
    } catch(err) {
        console.log(err)
    }

}