import { getTrimmed } from '../utils/getTrimmed'
export interface CardProps {
    title: string;
    author: string;
    date_published: string;
    content: string;
}

const Card: React.FC<CardProps> = ({ title, content, author, date_published }) => {
    return(
        <div className="card p-0">
            <div className="w-80 h-72 md:w-96 md:h-80 bg-primary-card-background rounded-3xl p-7 flex flex-col justify-between">
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
            </div>
        </div>
    )
}

export default Card;