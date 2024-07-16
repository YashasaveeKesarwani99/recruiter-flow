import React, { useState } from 'react';
import { useQuery } from 'react-query';
import { getBlogs } from '../../utils/getBlogs';
import Card from '../../components/card';
import Loader from '../../components/loader';
import Button from '../../components/button';
import PlusOutlined from '../../assets/plus';
import AddBlog from '../../components/modal';
import Input from '../../components/input';

export interface HomeProps {}

const Home: React.FC<HomeProps> = () => {

  const [open, setOpen] = useState<boolean>(false);

  const { status, data, error } = useQuery('users', getBlogs);

  if (status === 'loading') {
    return (
      <div className="bg-primary-background h-screen w-screen">
        <Loader />
      </div>
    );
  }

  return (
    <div className="bg-primary-background min-h-screen w-screen flex flex-wrap justify-around gap-5 p-5 md:p-12">
      {data?.map((blog: Blog) => {
        return (
          <Card
            key={blog.id}
            title={blog.title}
            author={blog.author}
            date_published={blog.date_published}
            content={blog.content}
          />
        );
      })}
      <Button primary={true} className="fixed bottom-12 right-12"
        onClick={() => setOpen(true)}
      >
        <PlusOutlined height={20} width={20} />
      </Button>
      <AddBlog title="New Blog Post"
            open={open}
        >
            <div className='flex flex-col justify-between gap-20'>
          <div className='flex justify-between'>
            <Input 
                type="input"
                placeholder="Title"
            />
            <Input 
                type="input"
                placeholder="Author"
            />
          </div>
          <Input
            type="textarea"
            placeholder='Blog'
          />
          </div>
          <div className='flex gap-4 mt-8 items-end justify-end'>
          <Button
            primary={false}
            onClick={() => setOpen(false)}
          >
            Cancel
          </Button>
          <Button
            primary={false}
            onClick={() => setOpen(false)}
          >Submit</Button>
          </div>
        </AddBlog>
    </div>
  );
};

export default Home;
