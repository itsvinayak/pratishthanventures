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
    let imageDescription: any = "";
    if (props.image.title) {
        title = <h5 className="card-title text-center pt-2">{props.image.title}</h5>
    }
    if (props.image.description) {
        description = <p className="card-text text-center pt-2">{props.image.description}</p>
    }
    if(props.image.title || props.image.description){
        imageDescription = (
            <div className="card-body">
                {title}
                {description}
            </div>
        )
    }
    return (
        <div className="card m-3">
            <Image src={props.image.src}
                alt="image"
                height="0"
                width="500"
                style={{ height: '20rem' }}
                className="img-fluid card-img-top rounded" />
            {imageDescription}
        </div>
    )
}


export default CardImage;