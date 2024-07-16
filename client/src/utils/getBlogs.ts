export const getBlogs = async () => {

    const url = import.meta.env.VITE_API_URL

    try {
        const response = await fetch(
            `${url}/blogs`
        )
    
        return response.json() as Promise<Blog[]>
    } catch(err) {
        console.log(err)
    }

}