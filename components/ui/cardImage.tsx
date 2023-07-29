import Image from 'next/image';

interface CardImageProps {
    image: {
        id: number,
        src: string,
        title: any,
        description: any
    }
}


const CardImage = (props: CardImageProps) => {
    let title: any = "";
    let description: any = "";
    if (props.image.title) {
        title = <h5 className="card-title text-center pt-2">{props.image.title}</h5>
    }
    if (props.image.description) {
        description = <p className="card-text text-center pt-2">{props.image.description}</p>
    }
    return (
        <div className="card m-4">
            <div className="card-body">
                <Image src={props.image.src}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    alt="image"
                    height="0"
                    width="500"
                    style={{ height: '20rem' }}
                    className="img-fluid" />
                {title}
                {description}
            </div>
        </div>
    )
}


export default CardImage;