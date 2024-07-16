import React, { useState } from 'react';
import { useQuery } from 'react-query';
import { getBlogs } from '../../utils/getBlogs';
import Card from '../../components/card';
import Loader from '../../components/loader';
import Button from '../../components/button';
import PlusOutlined from '../../assets/plus';
import AddBlog from '../../components/modal';
import Input from '../../components/input';
import { postBlogs } from '../../utils/postBlogs';
import useNotify from '../../utils/useNotify';

export interface HomeProps {}

const Home: React.FC<HomeProps> = () => {

  const notify = useNotify();
  const [open, setOpen] = useState<boolean>(false);
  const [formData, setFormData] = useState({
    title:"",
    author:"",
    content: ""
  })

  const { status, data, error, refetch } = useQuery('users', getBlogs);

  const handleCancel = () => {
    setOpen(false)
    setFormData({
        author:"",
        title:"",
        content:""
    })
  }

  const handleSubmit = async () => {

    if(formData.title && formData.author && formData.content) {
        try {
            const response = await postBlogs({
                data: formData
            })

            if(response) {
                setFormData({
                    author:"",
                    title:"",
                    content:""
                })
                setOpen(false)
                notify.success("Blog added!")
                refetch();
            } else {
                setFormData({
                    author:"",
                    title:"",
                    content:""
                })
                notify.error("Couldn't add blog")
            }
        } catch(err) {
            console.log(err)
        }
    } else {
        notify.error("Please enter all the data!")
    }

  }

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
            id={blog.id}
            title={blog.title}
            author={blog.author}
            date_published={blog.date_published}
            content={blog.content}
            refetch={refetch}
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
                onChange={(e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) => {
                    setFormData((fd) => ({
                        ...fd,
                        title: e.target.value
                    }))
                }}
            />
            <Input 
                type="input"
                placeholder="Author"
                onChange={(e: React.ChangeEvent<HTMLTextAreaElement> | React.ChangeEvent<HTMLInputElement>) => {
                    setFormData((fd) => ({
                        ...fd,
                        author: e.target.value
                    }))
                }}
            />
          </div>
          <Input
            type="textarea"
            placeholder='Blog'
            onChange={(e:React.ChangeEvent<HTMLTextAreaElement> | React.ChangeEvent<HTMLInputElement> ) => {
                setFormData((fd) => ({
                    ...fd,
                    content: e.target.value
                }))
            }}
          />
          </div>
          <div className='flex gap-4 mt-8 items-end justify-end'>
          <Button
            primary={false}
            onClick={handleCancel}
          >
            Cancel
          </Button>
          <Button
            primary={false}
            onClick={handleSubmit}
          >Submit</Button>
          </div>
        </AddBlog>
    </div>
  );
};

export default Home;
