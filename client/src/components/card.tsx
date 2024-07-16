import { useState } from 'react';
import PlusOutlined from '../assets/plus';
import { getTrimmed } from '../utils/getTrimmed'
import Button from './button';
import { deleteBlog } from '../utils/deleteBlog';
import useNotify from '../utils/useNotify';
import { RefetchOptions, RefetchQueryFilters, QueryObserverResult } from 'react-query';
export interface CardProps {
    title: string;
    author: string;
    date_published: string;
    content: string;
    id: number;
    refetch:  <TPageData>(options?: (RefetchOptions & RefetchQueryFilters<TPageData>) | undefined) => Promise<QueryObserverResult<Blog[] | undefined, unknown>>
}

const Card: React.FC<CardProps> = ({ title, content, author, date_published, id, refetch }) => {

    const notify = useNotify();
    const [hovered, setHovered] = useState(false)

    const handleMouseEnter = () => {
        setHovered(true)
    }

    const handleMouseLeave = () => {
        setHovered(false)
    }

    const handleDelete = async () => {
        try {
            const response = await deleteBlog(id)

            if(response?.ok) {
                notify.info("Blog deleted!")
                refetch()
            }
        } catch(err) {
            console.log(err)
        }
    }

    return(
        <div className="relative card p-0"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        >
            <div className="w-80 h-72 md:w-96 md:h-80 bg-primary-card-background rounded-3xl p-7 flex flex-col justify-between
             hover:bg-gradient-to-br hover:from-primary-card-background from-70% hover:to-primary-background transition duration-500
            ">
                <section className="flex flex-col items-start justify-between gap-4">
                    <h3 className="bold text-primary-yellow">{title}</h3>
                    <p className="text-left text-white max-w-80">
                        {getTrimmed(content)}
                    </p>
                </section>
                <footer className="flex flex-col items-start text-white">
                    <p>~ <i>{author}</i></p>
                    <p className="text-xs">{date_published}</p>
                </footer>
                {
                    hovered ? (
                        <Button primary={true}
                        onClick={handleDelete}
                    className='absolute w-12 h-12 bottom-5 right-2 bg-transparent shadow-none rotate-45'
                >
                    <PlusOutlined
                        fill='white'
                    />
                </Button>
                    ) : <></>
                }

            </div>
        </div>
    )
}

export default Card;