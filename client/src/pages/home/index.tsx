import React from 'react';
import { useQuery } from 'react-query'
import { getBlogs } from '../../utils/getBlogs';
import Card from '../../components/card';
import Loader from '../../components/loader';
import Button from '../../components/button';
import PlusOutlined from '../../assets/plus';

export interface HomeProps {

}

const Home: React.FC<HomeProps> = () => {

    const { status, data, error } = useQuery('users', getBlogs)

    if(status === "loading") {
        return (
            <div 
            className="bg-primary-background h-screen w-screen"
        >
            <Loader/>
        </div>
        )
    }

    return(
        <div 
            className="bg-primary-background min-h-screen w-screen flex flex-wrap justify-around gap-5 p-5 md:p-12"
        >
            {
                data?.map((blog:Blog) => {
                    return (
                        <Card 
                            key={blog.id}
                            title={blog.title}
                            author={blog.author}
                            date_published={blog.date_published}
                            content={blog.content}
                        />
                    )
                })
            }
            <Button primary={true} className="fixed bottom-12 right-12">
                <PlusOutlined
                    height={20}
                    width={20}
                />
            </Button>
        </div>
    )
}

export default Home;