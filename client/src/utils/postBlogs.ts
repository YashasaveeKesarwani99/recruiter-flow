export interface PostBlogsProps {
    data: {
        title: string,
        author: string,
        content: string,
    }
}

export const postBlogs= async ({data}: PostBlogsProps) => {

    const url = import.meta.env.VITE_API_URL


    try {
        const response = await fetch(
            `${url}/blogs`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json' 
                  },
                  body: JSON.stringify(data)
            }
        )
        
        return response.json() as Promise<Blog[]>
    } catch(err) {
        console.log(err)
    }

}